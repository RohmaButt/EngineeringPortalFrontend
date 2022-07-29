/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { KTSVG } from '../../../../_metronic/helpers'
import { PatchMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import 'react-toastify/dist/ReactToastify.css'
import { defaultImageJpg, defaultImageSvg, getCurrentDateAndTime } from '../../../../setup/appConstants'
import { useTracking } from 'react-tracking'
import Tooltip from '@mui/material/Tooltip'
import { IGenericLookup, IPeriod, periodLockStatusData } from '../../shared/Types/sharedITypes'
import { getAllPeriodDataFromDB } from '../../shared/Services/timeSheetService'
import moment from 'moment'
import { getUserName } from '../../auth/Common'
import { NewTimesheet } from './NewTimesheet'
import BasicCarousel from '../../shared/Carousels/BasicCarousel'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { GetJiraIssueCategories } from '../../shared/Services/sharedAPIsService'
import DeleteIcon from '@mui/icons-material/Delete';
import EditableContainer from '../../shared/EditableContainer/EditableContainer'
import Select from 'react-select'
import TimesheetDataTable from './TimesheetDataTable'
import './style.scss'
import _ from 'lodash'

type Props = {
  className: string
}

const newSelectStyle = {
  control: (base: any) => ({
    ...base,
    '&:hover': {
      color: 'black',
    },
    border: '1px solid #e4e6ef',
    boxShadow: 'none',
    borderRadius: '0.475rem',
    height: '100%',
    fontSize: '1.1rem',
    fontWeight: '500',
    lineHeight: '1.5',
    color: '#181c32',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    '&:hover': {
      color: 'inherit',
    },
    height: '100%',
    color: '#a1a5b7',
  }),
}

const TimesheetData: React.FC<Props> = ({ className }) => {
  const [toggleNewMemeber, setToggleNewMemeber] = useState(false)
  const { trackEvent } = useTracking()
  const [lookupData, setLookupData] = useState<any[]>([])
  const [jiraCategories, setJiraCategories] = useState<IGenericLookup[]>([])

  useEffect(() => {
    ; (async () => {
      await getAllPeriodDataFromDB()
        .then((response: any) => {
          if (response != null) {
            console.log('response', response)
            setLookupData(
              response.map((item: IPeriod) => {
                return {
                  id: item.id,
                  isActive: item.isActive,
                  periodStartDate: item.periodStartDate,
                  periodEndDate: item.periodEndDate,
                  lockStatus: item.lockStatus,
                  modifyDate: item.modifyDate,
                  modifyUser: item.modifyUser
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getAllPeriodDataFromDB', error)
        })
      await GetJiraIssueCategories()
        .then((response: any) => {
          if (response != null) {
            console.log('GetJiraIssueCategories', response)
            setJiraCategories(
              response.data.map((item: any) => {
                return {
                  value: item.id,
                  label: item.code + " " + item.name
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:GetJiraIssueCategories', error)
        })
    })()
  }, [])

  function handlePatchRequest(newValue: any, id: number) {
    const requestObject = [
      {
        op: 'replace',
        value: newValue,
        path: '/lockStatus',
      },
      {
        op: 'replace',
        value: getUserName(),
        path: '/ModifyUser',
      },
      {
        op: 'replace',
        value: getCurrentDateAndTime(),
        path: '/modifyDate',
      },
    ]
      ; (async () => {
        await PatchMiddleWare(`TsPeriodMgmt/UpdatePeriod?id=${id}`, requestObject).then(
          (response: any) => {
            if (response.status === 200) {
              const cellText: any = lookupData.filter((x) => {
                return x.id === id
              })
              cellText[0].lockStatus = newValue
              cellText[0].modifyUser = getUserName()
              const refreshedData = [...lookupData]
              setLookupData(refreshedData)
              toast.success('Data updated successfully.')
            } else toast.error('Data updation failed.')
          }
        )
      })()
  }

  /* Validation Duplicate*/
  const validateDuplicateOpenPeriodsForSameDateRange = (inputPeriodStartDate: Date, inputPeriodEndDate: Date) => {
    let counter = lookupData.filter((f: any) => f.periodStartDate === inputPeriodStartDate && f.periodEndDate === inputPeriodEndDate && f.lockStatus).length;
    if (counter > 0)
      return true
    else return false
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Timesheet</span>
          <span className='text-muted mt-1 fw-bolder fs-5 text-hover-primary'>User, {getUserName()}</span>
        </h3>
        <h3 className='card-title align-items-start' style={{ width: '20rem', top: '15%', position: 'absolute', left: '40%' }}>
          <span className='text-muted mt-1 fw-bolder fs-5 text-hover-primary'>
            {moment().format('ddd MMM DD YYYY')} - {moment().format('ddd MMM DD YYYY')}
          </span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title=''
        >
          <button
            className='btn btn-sm btn-light-primary me-4'
            onClick={() => {
              setToggleNewMemeber(true)
            }}
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />Log Work
          </button>
        </div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>

          <Carousel dynamicHeight width='100%' onChange={(e) => { console.log('Carousel index', e) }} selectedItem={3}
            infiniteLoop={false} showIndicators={false} showStatus={false} showThumbs={false}
            showArrows={true} transitionTime={100} useKeyboardArrows
          >
            {
              lookupData.map((ele: any) =>
                (<TimesheetDataTable key={_.uniqueId()} />)
              )
            }
          </Carousel>

        </div>
      </div>
      <ToastContainer />
      {
        toggleNewMemeber && (
          <NewTimesheet
            jiraCategoriesData={jiraCategories}
            Data={lookupData}
            setData={(refreshedData: any[]) => {
              setLookupData(refreshedData)
            }}
            toggleNewMemeber={toggleNewMemeber}
            setToggleNewMemeber={(showStatus: boolean) => {
              setToggleNewMemeber(showStatus)
            }}
          />
        )
      }
    </div >
  )
}

export { TimesheetData }
