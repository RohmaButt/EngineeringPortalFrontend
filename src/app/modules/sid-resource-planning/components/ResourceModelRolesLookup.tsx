/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {KTSVG} from '../../../../_metronic/helpers'
import {
  DeleteMiddleWare,
  DeleteBulkMiddleWare,
  PatchMiddleWare,
} from '../../../pages/dashboard/utils/apiMiddleWare'
import 'react-toastify/dist/ReactToastify.css'
import {getCurrentDateAndTime} from '../../../../setup/appConstants'
import EditableContainer from '../../shared/EditableContainer/EditableContainer'
import {useTracking} from 'react-tracking'
import {
  getPaycomDepartmentsFromDB,
  getResourceModelGroupsFromDB,
} from '../../shared/Services/sharedAPIsService'
import {
  dedicatedData,
  IResourceModelRole,
  ISelectookup,
  shiftsData,
  statusData,
} from '../../shared/Types/sharedITypes'
import {DeleteionDialogueBox} from '../../shared/DeleteionDialogueBox/DeleteionDialogueBox'
import {getResourceModelRolesFromDB} from '../../shared/Services/ResourceModelRolesService'
import EditableDDL from '../../shared/EditableDDL/EditableDDL'
import {NewResourceModelRolesLookup} from './NewResourceModelRolesLookup'
import EditableCreateableSelect from '../../shared/EditableCreateableSelect/EditableCreateableSelect'

type Props = {
  className: string
}
const ResourceModelRolesLookup: React.FC<Props> = ({className}) => {
  const [toggleNewResounceModel, setToggleNewResounceModel] = useState(false)
  const {trackEvent} = useTracking()

  /*Load data*/
  const [resourceModelData, setResourceModelData] = useState<IResourceModelRole[]>([])
  const [departmentsData, setdepartmentsData] = useState<ISelectookup[]>([])
  const [resourceModelGroups, setResourceModelGroups] = useState<any[]>([])
  useEffect(() => {
    ;(async () => {
      await getResourceModelRolesFromDB()
        .then((response: any) => {
          if (response != null) {
            setResourceModelData(
              response.map((item: IResourceModelRole) => {
                return {
                  id: item.id,
                  roleResourceModel: item.roleResourceModel,
                  roleGroupId: item.roleGroupId,
                  roleGroupName: item.roleGroupName,
                  paycomSubDepartment: item.paycomSubDepartment,
                  status: item.status,
                  isDedicated: item.isDedicated,
                  shifts: item.shifts,
                  modifyDate: item.modifyDate,
                  isActive: item.isActive,
                  deleteCheck: false,
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getAllSIDRegionsFromDB', error)
        })

      await getPaycomDepartmentsFromDB()
        .then((response: any) => {
          if (response != null) {
            setdepartmentsData(
              response.data.map((item: any) => {
                return {
                  value: item.subDepartmentCode,
                  label: item.subDepartmentDisplayName,
                }
              })
            )
          } else {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('Exception happened:getAllSIDRegionsFromDB')
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getAllSIDRegionsFromDB', error)
        })

      await getResourceModelGroupsFromDB()
        .then((response: any) => {
          if (response != null) {
            setResourceModelGroups(
              response.data.map((item: any) => {
                return {
                  value: item.roleGroupId,
                  label: item.roleGroupName,
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getResourceModelGroupsFromDB', error)
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
  function handleRoleResourceModelPatch(resourceModelPatchValue: any, id: number, type: string) {
    let pachtResourceModelGrpId: any
    let pachtResourceModelGrpName: any

    let requestObject
    if (type === 'roleGroupName') {
      if (
        resourceModelPatchValue?.inputValue === undefined &&
        resourceModelPatchValue?.value === undefined &&
        resourceModelPatchValue?.label === undefined
      ) {
        pachtResourceModelGrpId = 0
        pachtResourceModelGrpName = resourceModelPatchValue
      } else if (
        resourceModelPatchValue?.inputValue === undefined &&
        resourceModelPatchValue?.value !== undefined &&
        resourceModelPatchValue?.label !== undefined
      ) {
        pachtResourceModelGrpId = resourceModelPatchValue.value
        pachtResourceModelGrpName = resourceModelPatchValue.label
      } else if (
        resourceModelPatchValue?.inputValue !== undefined &&
        resourceModelPatchValue?.value === undefined &&
        resourceModelPatchValue?.label.includes('Add')
      ) {
        pachtResourceModelGrpId = 0
        pachtResourceModelGrpName = resourceModelPatchValue.inputValue
      }

      requestObject = [
        {
          op: 'replace',
          value: pachtResourceModelGrpId,
          path: 'roleGroupId',
        },
        {
          op: 'replace',
          value: pachtResourceModelGrpName,
          path: type,
        },
        {
          op: 'replace',
          value: getCurrentDateAndTime(),
          path: '/modifydate',
        },
      ]
    } else {
      requestObject = [
        {
          op: 'replace',
          value: resourceModelPatchValue,
          path: type,
        },
        {
          op: 'replace',
          value: getCurrentDateAndTime(),
          path: '/modifydate',
        },
      ]
    }

    ;(async () => {
      await PatchMiddleWare(
        `ResourceModelRoles/UpdateResourceModelRole?id=${id}`,
        requestObject
      ).then(async (response: any) => {
        if (response.status === 201) {
          const cellText: any = resourceModelData.filter((x) => {
            return x.id === id
          })
          switch (type) {
            case 'roleResourceModel':
              cellText[0].roleResourceModel = resourceModelPatchValue
              break
            case 'roleGroupName':
              let resopnseBody: any
              await response.text().then((data: any) => {
                resopnseBody = JSON.parse(data)
                cellText[0].roleGroupName = pachtResourceModelGrpName
                cellText[0].roleGroupId = resopnseBody.id
              })
              break
            case 'shifts':
              cellText[0].shifts = resourceModelPatchValue
              break
            case 'status':
              cellText[0].status = resourceModelPatchValue
              break
            case 'paycomSubDepartment':
              cellText[0].paycomSubDepartment = resourceModelPatchValue
              break
            case 'isDedicated':
              cellText[0].isDedicated = resourceModelPatchValue
              break
          }
          const refreshedData = [...resourceModelData]
          setResourceModelData(refreshedData)
          toast.success('Data updated successfully.')
        } else toast.error('Data updation failed.')
      })
      //.then((response: any) => {})
    })()
  }
  /*Patch Request*/

  /*Delete records*/
  const MarkCheckOrUnCheckAllCheckbox = () => {
    if (deleteAllCheck) {
      if (
        resourceModelData.filter((f: IResourceModelRole) => f.deleteCheck === false).length >= 1
      ) {
        setDeleteAllCheck(false)
      }
    }
    if (deleteAllCheck === false) {
      if (resourceModelData.filter((f: IResourceModelRole) => f.deleteCheck === true).length >= 1) {
        setDeleteAllCheck(false)
      }
    }
    if (
      resourceModelData.filter((f: IResourceModelRole) => f.deleteCheck === false).length ===
      resourceModelData.length
    ) {
      setDeleteAllCheck(false)
    }
    if (
      resourceModelData.filter((f: IResourceModelRole) => f.deleteCheck === true).length ===
      resourceModelData.length
    ) {
      setDeleteAllCheck(true)
    }
  }

  const deleteSingleResourceModel = (id: number) => {
    ;(async () => {
      await DeleteMiddleWare(`ResourceModelRoles/DeleteResourceModelRoleById?id=${id}`)
        .then((response: any) => {
          if (response.status === 204) {
            setResourceModelData(
              resourceModelData.filter((ele: IResourceModelRole) => ele.id !== id)
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

  const deleteMultipleResourceModels = (checkedDeletedIds: number[]) => {
    if (checkedDeletedIds.length > 0) {
      ;(async () => {
        await DeleteBulkMiddleWare(
          `ResourceModelRoles/DeleteResourceModelRolesInBulk`,
          checkedDeletedIds
        )
          .then((response: any) => {
            if (response.status === 204) {
              setResourceModelData(
                resourceModelData.filter(
                  (ele: IResourceModelRole) => !checkedDeletedIds.includes(ele.id)
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
    if (popup.id > 0) deleteSingleResourceModel(popup.id)
    else if (
      resourceModelData.filter((f: IResourceModelRole) => f.deleteCheck === true).length > 0
    ) {
      const checkedDeletedIds = resourceModelData
        .filter((f: IResourceModelRole) => f.deleteCheck === true)
        .map((x: IResourceModelRole) => x.id)
      deleteMultipleResourceModels(checkedDeletedIds)
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
    resourceModelData.map((item: IResourceModelRole) => {
      return (item.deleteCheck = status)
    })
    setDeleteAllCheck(status)
  }

  const toggleDeleteCheck = (e: any, id: number) => {
    const toggledResounceModelCheck: any = resourceModelData.filter(
      (f: IResourceModelRole) => f.id === id
    )
    if (e.target.checked) {
      toggledResounceModelCheck[0].deleteCheck = true
    } else {
      toggledResounceModelCheck[0].deleteCheck = false
    }
    const refreshedData = [...resourceModelData]
    setResourceModelData(refreshedData)
    MarkCheckOrUnCheckAllCheckbox()
  }
  /*Delete records*/

  const getDeptName = (paycomSubDepartment: any) => {
    return (
      departmentsData.filter((ele: ISelectookup) => ele.value === paycomSubDepartment)[0]?.label ||
      ''
    )
  }

  const getStatus = (status: any) => {
    return statusData.filter((ele: any) => ele.value === status.toString())[0]?.label || ''
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Resource Model Roles</span>
          <span className='text-muted mt-1 fw-bold fs-7'>
            {resourceModelData.length || 0} model roles
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
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />+ New Model
            Role
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
                <th className='min-w-140px text-hover-primary'>Role Resource Model</th>
                <th className='min-w-150px text-hover-primary'>Role Group Name</th>
                <th className='min-w-140px text-hover-primary'>Paycom Sub Department</th>
                <th className='min-w-120px text-hover-primary'>Status</th>
                <th className='min-w-120px text-hover-primary'>Is Dedicated</th>
                <th className='min-w-120px text-hover-primary'>Shifts</th>
                <th className='min-w-100px text-end'></th>
              </tr>
            </thead>
            <tbody>
              {resourceModelData
                .sort((a, b) => a.id - b.id)
                .map((resourceRoleItem: IResourceModelRole) => {
                  return (
                    <tr key={resourceRoleItem.id}>
                      <td>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            key={'deleteCheckbox_' + resourceRoleItem.id}
                            checked={resourceRoleItem.deleteCheck}
                            onChange={(e) => toggleDeleteCheck(e, resourceRoleItem.id)}
                          />
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <EditableContainer
                              id='roleResourceModel'
                              doubleClick={true}
                              handleEnter={(e: any) =>
                                handleRoleResourceModelPatch(
                                  e,
                                  resourceRoleItem.id,
                                  'roleResourceModel'
                                )
                              }
                              className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                            >
                              {resourceRoleItem.roleResourceModel}
                            </EditableContainer>
                          </span>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {resourceRoleItem.id}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <EditableCreateableSelect
                              doubleClick={true}
                              id='roleGroupName'
                              data={resourceModelGroups}
                              itemId={resourceRoleItem.roleGroupId}
                              selectedValue={resourceRoleItem.roleGroupName}
                              onChange={(e: any) => {
                                handleRoleResourceModelPatch(
                                  e,
                                  resourceRoleItem.id,
                                  'roleGroupName'
                                )
                                trackEvent({
                                  Path: 'resource-model-mapping',
                                  DomSelector: 'resource-model-mapping-roleGroup-input',
                                })
                              }}
                            >
                              {resourceRoleItem.roleGroupName}
                            </EditableCreateableSelect>
                          </span>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {resourceRoleItem.roleGroupId}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <EditableDDL
                              doubleClick={true}
                              id='paycomSubDepartment'
                              data={departmentsData}
                              itemId={resourceRoleItem.paycomSubDepartment}
                              selectedValue={getDeptName(resourceRoleItem.paycomSubDepartment)}
                              onChange={(e: any) => {
                                handleRoleResourceModelPatch(
                                  e,
                                  resourceRoleItem.id,
                                  'paycomSubDepartment'
                                )
                                trackEvent({
                                  Path: 'resource-model-mapping',
                                  DomSelector: 'resource-model-mapping-dept-input',
                                })
                              }}
                            >
                              {getDeptName(resourceRoleItem.paycomSubDepartment)}
                            </EditableDDL>
                          </span>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {resourceRoleItem.paycomSubDepartment}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <EditableDDL
                              doubleClick={true}
                              id='status'
                              data={statusData}
                              itemId={resourceRoleItem.status}
                              selectedValue={getStatus(resourceRoleItem.status)}
                              onChange={(e: any) => {
                                handleRoleResourceModelPatch(e, resourceRoleItem.id, 'status')
                                trackEvent({
                                  Path: 'resource-model-mapping',
                                  DomSelector: 'resource-model-mapping-status-input',
                                })
                              }}
                            >
                              {getStatus(resourceRoleItem.status)}
                            </EditableDDL>
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <EditableDDL
                              doubleClick={true}
                              id='isDedicated'
                              data={dedicatedData}
                              itemId={resourceRoleItem.isDedicated}
                              selectedValue={resourceRoleItem.isDedicated}
                              onChange={(e: any) => {
                                handleRoleResourceModelPatch(e, resourceRoleItem.id, 'isDedicated')
                                trackEvent({
                                  Path: 'resource-model-mapping',
                                  DomSelector: 'resource-model-mapping-dedicated-input',
                                })
                              }}
                            >
                              {resourceRoleItem.isDedicated}
                            </EditableDDL>
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 cursor-pointer'>
                            <EditableDDL
                              doubleClick={true}
                              id='shifts'
                              data={shiftsData}
                              itemId={resourceRoleItem.shifts}
                              selectedValue={resourceRoleItem.shifts}
                              onChange={(e: any) => {
                                handleRoleResourceModelPatch(e, resourceRoleItem.id, 'shifts')
                                trackEvent({
                                  Path: 'resource-model-mapping',
                                  DomSelector: 'resource-model-mapping-shifts-input',
                                })
                              }}
                            >
                              {resourceRoleItem.shifts}
                            </EditableDDL>
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-end flex-shrink-0'>
                          <button
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                            onClick={() => {
                              setConfirmationOpen(resourceRoleItem.id)
                              trackEvent({
                                Path: 'delete-resource-model-mapping-confirmation-call',
                                DomSelector:
                                  'submit-delete-resource-model-mapping-confirmation-button',
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
        <NewResourceModelRolesLookup
          departments={departmentsData}
          resouceModelData={resourceModelData}
          setResounceModelData={(refreshedResounceModel: IResourceModelRole[]) => {
            setResourceModelData(refreshedResounceModel)
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

export {ResourceModelRolesLookup}
