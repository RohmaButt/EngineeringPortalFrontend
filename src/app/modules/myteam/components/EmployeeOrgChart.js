/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import Select from 'react-select'
import * as d3 from 'd3'
import {toast, ToastContainer} from 'react-toastify'
import {getToken, getUser} from '../../../modules/auth/Common.ts'
import {fetchMiddleWare} from '../../../pages/dashboard/utils/apiMiddleWare'
import Chart from './Chart.js'
import '../../../modules/assets/myTeam/orgChart.scss'
import {exportOrgChart, exportPopupsToPDF, exportPopupsToPPT} from './PdfGenerator'
import {ReactComponent as LoadingIcon} from '../../../../_metronic/assets/logos/loading.svg'
import 'react-toastify/dist/ReactToastify.css'
import {useTracking} from 'react-tracking'
import {cleanUp, getChartMainData} from './chartHelper'
import {UserContext} from '../../context/UserContext'
//https://bl.ocks.org/bumbeishvili/09a03b81ae788d2d14f750afe59eb7de

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: 'none',
  }),
}
export default function EmployeeOrgChart(props) {
  //Stratify reasons::  "multiple roots",  "missing: " + nodeId,  "ambiguous: " + nodeId,  "no root" ,  "cycle"
  const [users, setAllUsers] = useState([])
  const {userEmail} = React.useContext(UserContext)
  const filterObj = props.filterObj
  const [fetchTillLastEdge, setFetchTillLastEdge] = useState(filterObj.fetchTillLastEdge)
  const [workEmail, setWorkEmail] = useState('')
  const [chartLoading, setChartLoading] = useState(false)
  const [downloadToggle, setDownloadToggle] = useState(false)
  const {trackEvent} = useTracking()

  useEffect(() => {
    setWorkEmail(userEmail || filterObj.workEmail)
  }, [filterObj.workEmail, userEmail])
  useEffect(() => {
    ;(async () => {
      // Immediately Invoked Function Expression(IIFE)
      await fetchMiddleWare(`OrganizationChart/GetAllUsers`)
        .then((response) => {
          if (response != null) {
            setAllUsers(
              response.data.map((data) => {
                return {
                  value: data.workEmail,
                  label: data.workEmail.toString().toLowerCase(),
                }
              })
            )
          }
        })
        .catch(function (error) {
          if (error) {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('error:GetAllUsers', error)
          }
        })
    })()
  }, [])

  useEffect(() => {
    return () => {
      //ComponentUnMount
      cleanUp()
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      console.time()
      await fetchChart()
      console.timeEnd()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workEmail, fetchTillLastEdge])

  const fetchChart = async () => {
    if (workEmail !== '') {
      setChartLoading(true)
      let url = `${
        process.env.REACT_APP_BASEURL
      }/OrganizationChart/GetOrgDataFlat?WorkEmail=${workEmail?.toString()?.toUpperCase()}
      &FetchTillLastEdge=${fetchTillLastEdge}&WorkStatus=WORKING&TreeStage=-1&IsAdmin=true`
      await d3
        .json(url, {
          headers: new Headers({
            'portal-token-key': getToken(),
            'portal-user-name': getUser(),
          }),
        })
        .then((res) => {
          if (res.data.length > 0) {
            getAndSetChart(
              res.data.filter((x) => x.sideChartFlag === false),
              res.data
                .filter((x) => x.sideChartFlag === true)
                .sort((a, b) => b.totalHeadcount - a.totalHeadcount)
            )
          } else {
            toast.error('There is no data for user in Org chart. Please contact BI team')
          }
          setChartLoading(false)
        })
        .catch(function (error) {
          console.log('error:fetchChart', error)
          setChartLoading(false)
          if (error) {
            toast.error(
              'Something went wrong with Org chart. Please reload page or contact BI team'
            )
            console.log('error:fetchChart', error)
          }
        })
    }
  }

  const getAndSetChart = (data, sideChartData) => {
    Chart()
      .container('.chart-container')
      .data(getChartMainData(data, sideChartData))
      .svgWidth(window.innerWidth) //350
      .svgHeight(window.innerHeight) //190
      .initialZoom(0.5)
      .onNodeClick((d) => console.log(d + ' node clicked'))
      .render()
  }

  const downloadPPTForCards = async () => {
    setChartLoading(true)
    trackEvent({
      Path: '/my-team/orgchart',
      DomSelector: 'ppt-download-button',
    })
    await exportPopupsToPPT()
    setChartLoading(false)
  }

  const downloadPDFForCards = async () => {
    setChartLoading(true)
    trackEvent({
      Path: '/my-team/orgchart',
      DomSelector: 'pdf-download-button',
    })
    await exportPopupsToPDF()
    setChartLoading(false)
  }

  const downloadSVGChart = () => {
    setChartLoading(true)
    trackEvent({
      Path: '/my-team/orgchart',
      DomSelector: 'pdf-download-button',
    })
    exportOrgChart()
    setChartLoading(false)
  }

  return (
    <div className='d-flex flex-column org-chart-container' id='div-employee-org-chart'>
      <div className='d-flex' onMouseLeave={() => setDownloadToggle(false)}>
        <div className='w-200px w-md-400px px-1 py-5' style={{border: 'none'}}>
          <Select
            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
            id='allUsers'
            options={users}
            isLoading={!users || users.length === 0}
            isClearable={true}
            styles={style}
            placeholder='Afiniti People'
            value={{
              value: workEmail,
              label: workEmail.toString().toLowerCase(),
            }}
            onChange={(e) => {
              trackEvent({
                Path: '/my-team/orgchart',
                DomSelector: 'org-chart-select-input',
              })
              setFetchTillLastEdge(false)
              setWorkEmail(e.value)
            }}
            defaultValue={{
              value: workEmail,
              label: workEmail.toString().toLowerCase(),
            }}
          />
        </div>
        <div className='w-200px w-md-210px px-5 py-9' style={{border: 'none'}}>
          <input
            className='form-check-input-grey'
            type='checkbox'
            value={!fetchTillLastEdge}
            id='fetchTillLastEdge'
            onChange={(e) => {
              trackEvent({
                Path: '/my-team/orgchart',
                DomSelector: 'only-direct-reportee-checkbox',
              })
              setFetchTillLastEdge(!e.target.checked)
            }}
            checked={!fetchTillLastEdge}
          />
          <label className='form-check-label ps-2' htmlFor='fetchTillLastEdge'>
            Only Direct Reportees
          </label>
        </div>
        <div className='px-1 py-5 float-right'>
          <button type='submit' id='reset_Btn' className='btn btn-sm btn-secondary w-10 mb-5'>
            Reset
          </button>
        </div>
        <div className='px-1 py-5 float-right'>
          <button
            type='submit'
            id='kt_sign_in_submit'
            className='btn btn-sm btn-secondary w-10 mb-5'
            onClick={downloadSVGChart}
          >
            Download Chart
          </button>
        </div>
        <div className='px-1 py-5 float-right'>
          <button
            type='submit'
            id='kt_sign_in_submit'
            className='btn btn-sm btn-secondary w-10 mb-5'
            onClick={() => {
              trackEvent({
                Path: '/my-team/orgchart',
                DomSelector: 'chart-download-button',
              })
              setDownloadToggle(!downloadToggle)
            }}
            onMouseOver={() => setDownloadToggle(true)}
          >
            Download Cards
          </button>
        </div>
        <button
          style={{display: 'none'}}
          type='submit'
          id='hidden_triger'
          className='btn btn-sm btn-link btn-color-muted btn-active-color-secondary'
          onClick={(e) => {
            setWorkEmail(sessionStorage.getItem('chartEmail').toString().trim())
            setFetchTillLastEdge(false)
            let ele = users.find(
              (e) => e.value === sessionStorage.getItem('chartEmail').toString().trim()
            )
            document.getElementById('allUsers').value = ele.value
            document.getElementById('allUsers').label = ele.label
            cleanUp()
          }}
        >
          trigger
        </button>

        {downloadToggle && (
          <div
            className='px-1 float-right flex-stack download-container'
            onMouseLeave={() => setDownloadToggle(false)}
          >
            <div
              className='flex-column flex-grow-1 pe-1 border border-gray-300 border-dashed rounded'
              style={{backgroundColor: 'white'}}
            >
              <div className='min-w-80px px-6'>
                <button
                  type='submit'
                  id='kt_sign_in_submit'
                  className='btn btn-sm btn-link btn-color-muted btn-active-color-secondary'
                  onClick={downloadPDFForCards}
                >
                  as pdf
                </button>
              </div>
              <div className='min-w-80px px-6'>
                <button
                  type='submit'
                  id='kt_sign_in_submit'
                  className='btn btn-sm btn-link btn-color-muted btn-active-color-secondary'
                  onClick={downloadPPTForCards}
                >
                  as ppt
                </button>
              </div>
            </div>
          </div>
        )}
        {chartLoading && (
          <div className='px-5 py-6'>
            <LoadingIcon width={30} height={30} />
          </div>
        )}
      </div>
      <div id="chartCard" className='card card-custom card-stretch mb-5' style={{position: 'relative'}}>
        <div id='div-org-chart' className='d-flex chart-container'></div>
        {/* <div
          id='printable'
          style={{width: '52rem', height: '62rem', right: '-13%', position: 'absolute'}}
        ></div> */}
      </div>
      <ToastContainer />
    </div>
  )
}
