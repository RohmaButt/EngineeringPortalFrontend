/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { KTSVG } from '../../../../_metronic/helpers'
import { PatchMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import 'react-toastify/dist/ReactToastify.css'
import { defaultImageSvg, getCurrentDateAndTime } from '../../../../setup/appConstants'
import EditableContainer from '../../shared/EditableContainer/EditableContainer'
import { useTracking } from 'react-tracking'
import { NewRegionLookup } from './NewRegionLookup'
import EditableReactSelect from '../../shared/EditableReactSelect/EditableReactSelect'
import {
  getAllSIDRegionsFromDB,
  getSIDEmplpyeesFromDB,
} from '../../shared/Services/sharedAPIsService'
import { defaultSelect, IRegionData, ISelectookup } from '../../shared/Types/sharedITypes'
import Tooltip from '@mui/material/Tooltip'

type Props = {
  className: string
}

const RegionsLookup: React.FC<Props> = ({ className }) => {
  const [toggleNewMemeber, setToggleNewMemeber] = useState(false)
  const { trackEvent } = useTracking()
  /*Fetch fuzzy search and Load employee data*/
  const [regionsData, setRegionsData] = useState<IRegionData[]>([])
  const [users, setAllUsers] = useState<ISelectookup[]>([])
  const [employeeData, setEmployeeData] = useState([])
  const [employeeTeam, setEmployeeTeam] = useState('')
  const [employeeDept, setEmployeeDept] = useState('')
  const [employeeSubDept, setEmployeeSubDept] = useState('')

  useEffect(() => {
    ; (async () => {
      await getSIDEmplpyeesFromDB()
        .then((response: any) => {
          if (response != null) {
            console.log('getSIDEmplpyeesFromDB', response)
            setEmployeeData(response.data.filter((f: any) => f.workStatus === 'WORKING'))
            const data = response.data.filter((f: any) => f.workStatus === 'WORKING').map((data: any) => {
              return {
                value: data.workEmail,
                label: data.workEmail,
              }
            })
            setAllUsers([defaultSelect, ...data])
          } else {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('Error happened:getSIDEmplpyeesFromDB')
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getSIDEmplpyeesFromDB', error)
        })

      await getAllSIDRegionsFromDB('?excludeStaticRegions=true')
        .then((response: any) => {
          console.log('getAllSIDRegionsFromDB', response)
          if (response != null) {
            setRegionsData(
              response.map((item: IRegionData) => {
                return {
                  id: item.id,
                  name: item.name,
                  isRegion: item.isRegion,
                  regionalManager: item.regionalManager,
                  department: item.department,
                  subDepartment: item.subDepartment,
                  team: item.team
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getAllSIDRegionsFromDB', error)
        })
    })()
  }, [])

  /*Fetch fuzzy search and Load employee data*/

  /*Patch Request*/
  function handleSidRegion(sidRegionValue: any, id: number) {
    if (validateRegionnName(sidRegionValue)) {
      toast.error(`A SID Region Name with "${sidRegionValue}" already exist. SID Region Names should be unique, please update your name`)
    }
    else {
      const requestObject = [
        {
          op: 'replace',
          value: sidRegionValue,
          path: '/name',
        },
        {
          op: 'replace',
          value: getCurrentDateAndTime(),
          path: '/modifiedAt',
        },
      ]
        ; (async () => {
          await PatchMiddleWare(`SidRpRegions/UpdateSidRpRegion?id=${id}`, requestObject).then(
            (response: any) => {
              console.log('handleSidRegion', response)
              if (response.status === 200) {
                const cellText: any = regionsData.filter((x) => {
                  return x.id === id
                })
                cellText[0].name = sidRegionValue
                console.log('cellText', cellText)
                const refreshedData = [...regionsData]
                setRegionsData(refreshedData)
                toast.success('Data updated successfully.')
              } else toast.error('Data updation failed.')
            }
          )
        })()
    }

  }

  const setEmployeeDetail = (data: any) => {
    setEmployeeTeam(data?.team)
    setEmployeeDept(data?.department)
    setEmployeeSubDept(data?.subDepartment)
  }

  function handleRegionManager(regionMangerValue: any, id: number) {
    console.log('regionMangerValue', regionMangerValue)
    let requestObject = null
    if (regionMangerValue === 'Select') {
      requestObject = [
        {
          op: 'replace',
          value: regionMangerValue,
          path: '/regionalManager',
        },
        {
          op: 'replace',
          value: getCurrentDateAndTime(),
          path: '/modifiedAt',
        },
        {
          op: 'replace',
          value: null,
          path: '/SubdDepartmentId',
        },
        {
          op: 'replace',
          value: null,
          path: '/DepartmentId',
        },
        {
          op: 'replace',
          value: null,
          path: '/TeamId',
        },
      ]
    }
    else {
      requestObject = [
        {
          op: 'replace',
          value: regionMangerValue,
          path: '/regionalManager',
        },
        {
          op: 'replace',
          value: getCurrentDateAndTime(),
          path: '/modifiedAt',
        },
      ]
    }
    console.log('handleRegionManager', requestObject)
      ; (async () => {
        await PatchMiddleWare(`SidRpRegions/UpdateSidRpRegion?id=${id}`, requestObject).then(
          (response: any) => {
            if (response.status === 200) {
              const cellText: any = regionsData.filter((x) => {
                return x.id === id
              })
              const data: any = employeeData.filter((f: any) => f.workEmail === regionMangerValue);
              cellText[0].team = data[0]?.team
              cellText[0].department = data[0]?.department
              cellText[0].subDepartment = data[0]?.subDepartment
              cellText[0].regionalManager = regionMangerValue
              setEmployeeDetail(data)
              const refreshedData = [...regionsData]
              setRegionsData(refreshedData)
              toast.success('Data updated successfully.')
            } else toast.error('Data updation failed.')
          }
        )
      })()
  }
  /*Patch Request*/

  /* Validation Region Name*/
  const validateRegionnName = (inputRegionName: string) => {
    let counter = regionsData.filter((f: any) => f.name === inputRegionName).length;
    if (counter > 0)
      return true
    else return false
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>SID - Region Setting</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{regionsData.length || 0} Regions</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <button
            className='btn btn-sm btn-light-primary me-4'
            onClick={() => {
              setToggleNewMemeber(true)
            }}
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />+ New
            Region
          </button>
        </div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px text-hover-primary'>SID Region</th>
                <th className='min-w-150px text-hover-primary'>SID Regional Manager</th>
                <th className='min-w-150px text-hover-primary'>Department</th>
                <th className='min-w-150px text-hover-primary'>Sub Department</th>
                <th className='min-w-150px text-hover-primary'>Team</th>
              </tr>
            </thead>
            <tbody>
              {regionsData
                .sort((a, b) => a.id - b.id)
                .map((regionItem: IRegionData) => {
                  return (
                    <tr key={regionItem.id}>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <Tooltip
                            title={
                              <span
                                style={{
                                  padding: '6px 6px',
                                  borderRadius: '6px',
                                }}
                              >
                                Double click to edit
                              </span>
                            }
                            placement='top'
                          >
                            <span className='text-muted fw-bold d-block fs-7'>
                              <EditableContainer
                                id='name'
                                doubleClick={true}
                                handleEnter={(e: any) => {
                                  console.log('handleEntersfdfd', e)
                                  handleSidRegion(e, regionItem.id)
                                }}
                                className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                              >
                                {regionItem.name}
                              </EditableContainer>
                            </span>
                          </Tooltip>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          {regionItem.isRegion && (
                            <div className='symbol symbol-45px me-5'>
                              <img src={defaultImageSvg} alt='' />
                            </div>
                          )}
                          <div className='d-flex flex-column w-100 me-2'>
                            <Tooltip
                              title={
                                <span
                                  style={{
                                    padding: '6px 6px',
                                    borderRadius: '6px',
                                  }}
                                >
                                  Double click to edit
                                </span>
                              }
                              placement='top'
                            >
                              <span className='text-muted fw-bold d-block fs-7'>
                                <EditableReactSelect
                                  doubleClick={true}
                                  id='regionalManager'
                                  data={users}
                                  itemId={regionItem.id}
                                  selectedValue={regionItem.regionalManager}
                                  onChange={(e: any) => {
                                    handleRegionManager(e, regionItem.id)
                                    trackEvent({
                                      Path: '/sid-rp-regions/lookup',
                                      DomSelector: 'sid-rp-regions-lookup-manager-select-input',
                                    })
                                  }}
                                >
                                  {regionItem.regionalManager}
                                </EditableReactSelect>
                              </span>
                            </Tooltip>
                          </div>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7'>
                            {regionItem.department}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7'>
                            {regionItem.subDepartment}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7'>
                            {regionItem.team}
                          </span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
      {toggleNewMemeber && (
        <NewRegionLookup
          users={users}
          employeeData={employeeData}
          regionsData={regionsData}
          setRegionsData={(refreshedRegionData: IRegionData[]) => {
            setRegionsData(refreshedRegionData)
          }}
          toggleNewMemeber={toggleNewMemeber}
          setToggleNewMemeber={(showStatus: boolean) => {
            setToggleNewMemeber(showStatus)
          }}
        />
      )}
    </div>
  )
}

export { RegionsLookup }
