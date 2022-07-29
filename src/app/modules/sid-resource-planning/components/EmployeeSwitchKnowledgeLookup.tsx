/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { KTSVG } from '../../../../_metronic/helpers'
import {
  DeleteMiddleWare,
  DeleteBulkMiddleWare,
  PatchMiddleWare,
} from '../../../pages/dashboard/utils/apiMiddleWare'
import 'react-toastify/dist/ReactToastify.css'
import { getCurrentDateAndTime } from '../../../../setup/appConstants'
import { useTracking } from 'react-tracking'
import {
  getAllSIDRegionsFromDB,
  getSIDEmplpyeesFromDB,
  GetSwitchPlatforms,
  GetSwitchProviders,
} from '../../shared/Services/sharedAPIsService'
import {
  INewEmployeeSwitchKnowledge,
  ISelectookup,
  NewEmployeeSwitchKnowledge,
  statusData,
} from '../../shared/Types/sharedITypes'
import { DeleteionDialogueBox } from '../../shared/DeleteionDialogueBox/DeleteionDialogueBox'
import { getEmployeeSwitchKnowledgeFromDB } from '../../shared/Services/ResourceModelRolesService'
import EditableDDL from '../../shared/EditableDDL/EditableDDL'
import { NewEmployeeSwitchKnowledgeLookup } from './NewEmployeeSwitchKnowledgeLookup'
import EditableCreateableSelect from '../../shared/EditableCreateableSelect/EditableCreateableSelect'

type Props = {
  className: string
}
const EmployeeSwitchKnowledgeLookup: React.FC<Props> = ({ className }) => {
  const [toggleNewResounceModel, setToggleNewResounceModel] = useState(false)
  const { trackEvent } = useTracking()

  /*Load data*/
  const [employeeSwitchData, setEmployeeSwitchData] = useState<INewEmployeeSwitchKnowledge[]>([])
  const [sidEmployeeData, setSidEmployeeData] = useState<NewEmployeeSwitchKnowledge[]>([])
  const [sidRegionData, setSidRegionData] = useState<ISelectookup[]>([])
  const [switchPlatformData, setSwitchPlatformData] = useState<ISelectookup[]>([])
  const [switchProviderData, setSwitchProviderData] = useState<ISelectookup[]>([])
  const [workEmailData, setWorkEmailData] = useState<ISelectookup[]>([])

  useEffect(() => {
    ; (async () => {
      await getSIDEmplpyeesFromDB()
        .then((response: any) => {
          if (response != null) {
            setSidEmployeeData(
              response.data.map((item: NewEmployeeSwitchKnowledge) => {
                return {
                  workEmail: item.workEmail,
                  fullName: item.fullName,
                  team: item.team,
                  workStatus: item.workStatus,
                  firstSupervisorWorkEmail: item.firstSupervisorWorkEmail,
                  legalCountry: item.legalCountry,
                  country: item.country,
                }
              })
            )
            setWorkEmailData(
              response.data.map((item: NewEmployeeSwitchKnowledge) => {
                return {
                  value: item.workEmail,
                  label: item.workEmail,
                }
              })
            )
          } else {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('Error happened:getSIDEmplpyeesFromDB')
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getSIDEmplpyeesFromDB', error)
        })

      await GetSwitchPlatforms()
        .then((response: any) => {
          if (response != null) {
            setSwitchPlatformData(
              response.data.map((item: any) => {
                return {
                  value: item.platformId,
                  label: item.platformName,
                }
              })
            )
          } else {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('Error happened:GetSwitchPlatforms')
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:GetSwitchPlatforms', error)
        })

      await GetSwitchProviders()
        .then((response: any) => {
          if (response != null) {
            setSwitchProviderData(
              response.data.map((item: any) => {
                return {
                  value: item.id,
                  label: item.name,
                }
              })
            )
          } else {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('Error happened:GetSwitchProviders')
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:GetSwitchProviders', error)
        })

      await getAllSIDRegionsFromDB('?excludeStaticRegions=false')
        .then((response: any) => {
          if (response != null) {
            setSidRegionData(
              response.map((item: any) => {
                return {
                  value: item.id,
                  label: item.sidregion,
                }
              })
            )
          } else {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('Error happened:getAllSIDRegionsFromDB')
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getAllSIDRegionsFromDB', error)
        })

      await getEmployeeSwitchKnowledgeFromDB()
        .then((response: any) => {
          if (response != null) {
            console.log('response', response)
            setEmployeeSwitchData(
              response.map((item: INewEmployeeSwitchKnowledge) => {
                return {
                  id: item.id,
                  workEmail: item.workEmail,
                  workStatus: item.workStatus,
                  changeStatus: item.changeStatus,
                  team: item.team,
                  country: item.country,
                  department: item.department,
                  employeeSidregion: item.employeeSidregion,
                  etlDate: item.etlDate,
                  firstSupervisorWorkEmail: item.firstSupervisorWorkEmail,
                  fullName: item.fullName,
                  legalCountry: item.legalCountry,
                  switchPlatformId: item.switchPlatformId,
                  switchPlatformName: item.switchPlatformName,
                  switchProviderId: item.switchProviderId,
                  switchProviderName: item.switchProviderName,
                  deleteCheck: false,
                }
              })
            )
          } else {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('Error happened:getEmployeeSwitchKnowledgeFromDB')
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getEmployeeSwitchKnowledgeFromDB', error)
        })
    })()
  }, [])
  /*Load data*/

  /*Delete Confirmation box*/
  const [popup, setPopup] = React.useState({
    show: false,
    id: 0,
  })

  const setConfirmationOpen = (id: any) => {
    setPopup({
      show: true,
      id: id,
    })
  }

  const setForDeletionInConfirmationOpen = () => {
    setDeletionForData()
    setPopup({
      show: false,
      id: 0,
    })
  }
  /*Delete Confirmation box*/

  /*Patch Request*/

  function handleEmpSwitchKnowPatch(recordPatchValue: any, id: number, type: string) {
    console.log('dd', recordPatchValue, id, type)
    let requestObject = [
      {
        op: 'replace',
        value: recordPatchValue,
        path: type,
      },
      {
        op: 'replace',
        value: getCurrentDateAndTime(),
        path: '/modifydate',
      },
    ]
      ; (async () => {
        await PatchMiddleWare(
          `EmployeeSwitchKnowledge/UpdateEmployeeSwitchKnowledge?id=${id}`,
          requestObject
        ).then(async (response: any) => {
          if (response.status === 200) {
            const cellText: any = employeeSwitchData.filter((x) => {
              return x.id === id
            })
            console.log('cellText[0]', cellText[0])
            switch (type) {
              case 'employeeEmail':
                cellText[0].employeeEmail = recordPatchValue
                const item = sidEmployeeData.filter((f) => f.workEmail === recordPatchValue)[0]
                cellText[0].fullName = item.fullName
                cellText[0].Team = item.team
                cellText[0].workStatus = item.workStatus
                cellText[0].firstSupervisorWorkEmail = item.firstSupervisorWorkEmail
                cellText[0].legalCountry = item.legalCountry
                cellText[0].country = item.country
                break
              case 'sidRegionId':
                cellText[0].sidRegionId = recordPatchValue
                getSidregionName(recordPatchValue)
                break
              case 'switchProviderId':
                cellText[0].switchProviderId = recordPatchValue
                cellText[0].switchProviderName =
                  switchProviderData.filter((ele: ISelectookup) => ele.value === recordPatchValue)[0]
                    ?.label || ''
                break
              case 'switchPlatformId':
                cellText[0].switchPlatformId = recordPatchValue
                cellText[0].switchPlatformName =
                  switchPlatformData.filter((ele: ISelectookup) => ele.value === recordPatchValue)[0]
                    ?.label || ''
                break
            }
            console.log('cellText[0]', cellText[0])
            const refreshedData = [...employeeSwitchData]
            setEmployeeSwitchData(refreshedData)
            toast.success('Data updated successfully.')
          } else toast.error('Data updation failed.')
        })
      })()
  }
  /*Patch Request*/

  /*Delete records*/
  const MarkCheckOrUnCheckAllCheckbox = () => {
    if (deleteAllCheck) {
      if (
        employeeSwitchData.filter((f: INewEmployeeSwitchKnowledge) => f.deleteCheck === false)
          .length >= 1
      ) {
        setDeleteAllCheck(false)
      }
    }
    if (deleteAllCheck === false) {
      if (
        employeeSwitchData.filter((f: INewEmployeeSwitchKnowledge) => f.deleteCheck === true)
          .length >= 1
      ) {
        setDeleteAllCheck(false)
      }
    }
    if (
      employeeSwitchData.filter((f: INewEmployeeSwitchKnowledge) => f.deleteCheck === false)
        .length === employeeSwitchData.length
    ) {
      setDeleteAllCheck(false)
    }
    if (
      employeeSwitchData.filter((f: INewEmployeeSwitchKnowledge) => f.deleteCheck === true)
        .length === employeeSwitchData.length
    ) {
      setDeleteAllCheck(true)
    }
  }

  const deleteSingleentry = (id: number) => {
    ; (async () => {
      await DeleteMiddleWare(`EmployeeSwitchKnowledge/DeleteEmployeeSwitchKnowledge?id=${id}`)
        .then((response: any) => {
          if (response.status === 204) {
            setEmployeeSwitchData(
              employeeSwitchData.filter((ele: INewEmployeeSwitchKnowledge) => ele.id !== id)
            )
            toast.success('Data deleted successfully.')
          }
        })
        .catch((error: any) => {
          toast.success('Error happened. Please try again or check BI team.')
          console.error('Exception happened:delateRegion', error)
        })
    })()
  }

  const deleteMultipleEntries = (checkedDeletedIds: number[]) => {
    if (checkedDeletedIds.length > 0) {
      ; (async () => {
        await DeleteBulkMiddleWare(
          `EmployeeSwitchKnowledge/DeleteEmployeeSwitchKnowledgeInBulk`,
          checkedDeletedIds
        )
          .then((response: any) => {
            if (response.status === 204) {
              setEmployeeSwitchData(
                employeeSwitchData.filter(
                  (ele: INewEmployeeSwitchKnowledge) => !checkedDeletedIds.includes(ele.id)
                )
              )
              toast.success('Data deleted successfully.')
            }
          })
          .catch((error: any) => {
            toast.error('Error happened. Please try again or check BI team.')
            console.error('Exception happened:delateMultipleRegions', error)
          })
      })()
    } else toast.error('Select any record to delete')
  }

  const setDeletionForData = () => {
    if (popup.id > 0) deleteSingleentry(popup.id)
    else if (
      employeeSwitchData.filter((f: INewEmployeeSwitchKnowledge) => f.deleteCheck === true).length >
      0
    ) {
      const checkedDeletedIds = employeeSwitchData
        .filter((f: INewEmployeeSwitchKnowledge) => f.deleteCheck === true)
        .map((x: INewEmployeeSwitchKnowledge) => x.id)
      deleteMultipleEntries(checkedDeletedIds)
    }
  }

  const [deleteAllCheck, setDeleteAllCheck] = useState(false)
  const toggleDeleteCheckForAll = (e: any) => {
    let status: boolean
    if (e.target.checked) {
      status = true
    } else {
      status = false
    }
    employeeSwitchData.map((item: INewEmployeeSwitchKnowledge) => {
      return (item.deleteCheck = status)
    })
    setDeleteAllCheck(status)
  }

  const toggleDeleteCheck = (e: any, id: number) => {
    const toggledResounceModelCheck: any = employeeSwitchData.filter(
      (f: INewEmployeeSwitchKnowledge) => f.id === id
    )
    if (e.target.checked) {
      toggledResounceModelCheck[0].deleteCheck = true
    } else {
      toggledResounceModelCheck[0].deleteCheck = false
    }
    const refreshedData = [...employeeSwitchData]
    setEmployeeSwitchData(refreshedData)
    MarkCheckOrUnCheckAllCheckbox()
  }
  /*Delete records*/

  const getSidregionName = (employeeSidregion: any) => {
    return (
      sidRegionData.filter((ele: ISelectookup) => ele.value === employeeSidregion)[0]?.label || ''
    )
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Employee Switch Knowledge</span>
          <span className='text-muted mt-1 fw-bold fs-7'>
            {employeeSwitchData.length || 0} employees
          </span>
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
              setToggleNewResounceModel(true)
            }}
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />+ New
          </button>
          <button
            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
            onClick={() => {
              setConfirmationOpen(0)
              trackEvent({
                Path: 'delete-region-confirmation-call',
                DomSelector: 'submit-delete-region-confirmation-button',
              })
            }}
          >
            <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
          </button>
        </div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bolder text-black border-top-1 text-center'>
                <th colSpan={7} className='min-w-120px border-right-1 text-hover-primary'>
                  Employee
                </th>
                <th colSpan={6} className='min-w-120px text-hover-primary'>
                  Switch Knowledge
                </th>
              </tr>

              <tr className='fw-bolder text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      onChange={toggleDeleteCheckForAll}
                      checked={deleteAllCheck}
                    />
                  </div>
                </th>
                <th className='min-w-150px text-hover-primary'>Work Email</th>
                <th className='min-w-150px text-hover-primary'>Name</th>
                <th className='min-w-150px text-hover-primary'>Team</th>
                <th className='min-w-150px text-hover-primary'>Work Status</th>
                <th className='min-w-150px text-hover-primary'>First Supervisor</th>
                <th className='min-w-150px text-hover-primary'>Legal Country</th>
                <th className='min-w-150px text-hover-primary'>Location</th>
                <th className='min-w-150px text-hover-primary'>SID Region</th>
                <th className='min-w-150px text-hover-primary'>Switch Provider</th>
                <th className='min-w-150px text-hover-primary'>Switch Platform</th>
                <th className='min-w-150px text-hover-primary'>ETL Date</th>
                <th className='min-w-100px text-end'></th>
              </tr>
            </thead>
            <tbody>
              {employeeSwitchData
                .sort((a, b) => a.id - b.id)
                .map((employeeSwitchKnowItem: INewEmployeeSwitchKnowledge) => {
                  return (
                    <tr key={employeeSwitchKnowItem.id}>
                      <td>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            key={'deleteCheckbox_' + employeeSwitchKnowItem.id}
                            checked={employeeSwitchKnowItem.deleteCheck}
                            onChange={(e) => toggleDeleteCheck(e, employeeSwitchKnowItem.id)}
                          />
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='fw-bold d-block fs-7 text-hover-primary text-muted'>
                            <EditableDDL
                              doubleClick={true}
                              id='workEmail'
                              width={150}
                              data={workEmailData}
                              itemId={employeeSwitchKnowItem.workEmail}
                              selectedValue={employeeSwitchKnowItem.workEmail}
                              onChange={(e: any) => {
                                handleEmpSwitchKnowPatch(
                                  e,
                                  employeeSwitchKnowItem.id,
                                  'employeeEmail'
                                )
                                trackEvent({
                                  Path: 'emp-knowledge-mapping',
                                  DomSelector: 'emp-knowledge-mapping-workEmail-input',
                                })
                              }}
                              className={`fw-bold d-block fs-7 text-hover-primary ${employeeSwitchKnowItem.workStatus === 'GONE'
                                  ? 'text-danger'
                                  : 'text-muted'
                                }`}
                            >
                              {employeeSwitchKnowItem.workEmail}
                            </EditableDDL>
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span
                            className={`fw-bold d-block fs-7 text-hover-primary ${employeeSwitchKnowItem.workStatus === 'GONE'
                                ? 'text-danger'
                                : 'text-muted'
                              }`}
                          >
                            {employeeSwitchKnowItem.fullName}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span
                            className={`fw-bold d-block fs-7 text-hover-primary ${employeeSwitchKnowItem.workStatus === 'GONE'
                                ? 'text-danger'
                                : 'text-muted'
                              }`}
                          >
                            {employeeSwitchKnowItem.team}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span
                            className={`fw-bold d-block fs-7 text-hover-primary ${employeeSwitchKnowItem.workStatus === 'GONE'
                                ? 'text-danger'
                                : 'text-muted'
                              }`}
                          >
                            {employeeSwitchKnowItem.workStatus}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span
                            className={`fw-bold d-block fs-7 text-hover-primary ${employeeSwitchKnowItem.workStatus === 'GONE'
                                ? 'text-danger'
                                : 'text-muted'
                              }`}
                          >
                            {employeeSwitchKnowItem.firstSupervisorWorkEmail}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span
                            className={`fw-bold d-block fs-7 text-hover-primary ${employeeSwitchKnowItem.workStatus === 'GONE'
                                ? 'text-danger'
                                : 'text-muted'
                              }`}
                          >
                            {employeeSwitchKnowItem.legalCountry}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span
                            className={`fw-bold d-block fs-7 text-hover-primary ${employeeSwitchKnowItem.workStatus === 'GONE'
                                ? 'text-danger'
                                : 'text-muted'
                              }`}
                          >
                            {employeeSwitchKnowItem.country}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <EditableDDL
                              doubleClick={true}
                              id='employeeSidregion'
                              data={sidRegionData}
                              itemId={employeeSwitchKnowItem.employeeSidregion}
                              selectedValue={getSidregionName(
                                employeeSwitchKnowItem.employeeSidregion
                              )}
                              onChange={(e: any) => {
                                handleEmpSwitchKnowPatch(
                                  e,
                                  employeeSwitchKnowItem.id,
                                  'sidRegionId'
                                )
                                trackEvent({
                                  Path: 'emp-knowledge-mapping',
                                  DomSelector: 'emp-knowledge-mapping-employeeSidregion-input',
                                })
                              }}
                            >
                              {getSidregionName(employeeSwitchKnowItem.employeeSidregion)}
                            </EditableDDL>
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <EditableDDL
                              doubleClick={true}
                              id='switchProviderData'
                              data={switchProviderData}
                              itemId={employeeSwitchKnowItem.switchProviderId}
                              selectedValue={employeeSwitchKnowItem.switchProviderName}
                              onChange={(e: any) => {
                                handleEmpSwitchKnowPatch(
                                  e,
                                  employeeSwitchKnowItem.id,
                                  'switchProviderId'
                                )
                                trackEvent({
                                  Path: 'emp-knowledge-mapping',
                                  DomSelector: 'emp-knowledge-mapping-switch-provider-input',
                                })
                              }}
                            >
                              {employeeSwitchKnowItem.switchProviderName}
                            </EditableDDL>
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <EditableDDL
                              doubleClick={true}
                              id='switchPlatformData'
                              data={switchPlatformData}
                              itemId={employeeSwitchKnowItem.switchPlatformId}
                              selectedValue={employeeSwitchKnowItem.switchPlatformName}
                              onChange={(e: any) => {
                                handleEmpSwitchKnowPatch(
                                  e,
                                  employeeSwitchKnowItem.id,
                                  'switchPlatformId'
                                )
                                trackEvent({
                                  Path: 'emp-knowledge-mapping',
                                  DomSelector: 'emp-knowledge-mapping-switch-platform-input',
                                })
                              }}
                            >
                              {employeeSwitchKnowItem.switchPlatformName}
                            </EditableDDL>
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                              {employeeSwitchKnowItem.etlDate}
                            </span>
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-end flex-shrink-0'>
                          <button
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                            onClick={() => {
                              setConfirmationOpen(employeeSwitchKnowItem.id)
                              trackEvent({
                                Path: 'delete-emp-knowledge-mapping-confirmation-call',
                                DomSelector:
                                  'submit-delete-emp-knowledge-mapping-confirmation-button',
                              })
                            }}
                          >
                            <KTSVG
                              path='/media/icons/duotune/general/gen027.svg'
                              className='svg-icon-3'
                            />
                          </button>
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
      {toggleNewResounceModel && (
        <NewEmployeeSwitchKnowledgeLookup
          sidEmployeeData={sidEmployeeData}
          sidRegionData={sidRegionData}
          switchPlatformData={switchPlatformData}
          switchProviderData={switchProviderData}
          employeeSwitchKnowledgeData={employeeSwitchData}
          setEmployeeSwitchKnowledgeData={(
            refreshedResounceModel: INewEmployeeSwitchKnowledge[]
          ) => {
            setEmployeeSwitchData(refreshedResounceModel)
          }}
          toggleNewResounceModel={toggleNewResounceModel}
          setToggleNewResounceModel={(showStatus: boolean) => {
            setToggleNewResounceModel(showStatus)
          }}
        />
      )}
      {popup.show && (
        <DeleteionDialogueBox
          popup={popup}
          setPopup={(PopupPropsFromChild) => {
            setPopup(PopupPropsFromChild)
          }}
          setForDeletionInConfirmationOpen={setForDeletionInConfirmationOpen}
        />
      )}
    </div>
  )
}

export { EmployeeSwitchKnowledgeLookup }
