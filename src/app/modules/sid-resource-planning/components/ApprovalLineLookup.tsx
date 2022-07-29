/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap-v5'
import {defaultImageSvg, getCurrentDateAndTime} from '../../../../setup/appConstants'
import {KTSVG} from '../../../../_metronic/helpers'
import {
  DeleteBulkMiddleWare,
  DeleteMiddleWare,
  fetchMiddleWare,
  fetchPostMiddleWare,
  PatchMiddleWare,
} from '../../../pages/dashboard/utils/apiMiddleWare'
import EditableContainer from '../../shared/EditableContainer/EditableContainer'
import {useTracking} from 'react-tracking'
import {toast, ToastContainer} from 'react-toastify'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Select from 'react-select'
import EditableReactSelect from '../../shared/EditableReactSelect/EditableReactSelect'
import {getPaycomEmployeesFromDB} from '../../shared/Services/sharedAPIsService'

type Props = {
  className: string
}

export interface IWorkFlowRegionData {
  id: number
  workflowOrder: number
  regionManager: string
  deleteCheck: boolean
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
const ApprovalLineLookup: React.FC<Props> = ({className}) => {
  const {trackEvent} = useTracking()
  const [approvalData, setApprovalData] = useState<IWorkFlowRegionData[]>([])

  const [toggleNewMemeber, setToggleNewMemeber] = useState(false)
  const [newRegionManager, setNewRegionManager] = useState('')
  const [newWorkflowOrder, setNewWorkflowOrder] = useState('')

  const [submitAndContinueFlag, setSubmitAndContinueFlag] = useState(false)

  /*Fetch fuzzy search employee data*/
  const [users, setAllUsers] = useState([])
  useEffect(() => {
    ;(async () => {
      await getPaycomEmployeesFromDB()
        .then((response: any) => {
          if (response != null) {
            setAllUsers(
              response.data.map((data: any) => {
                return {
                  value: data.workEmail,
                  label: data.workEmail,
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
  /*Fetch fuzzy search employee data*/

  /*Confirmation box*/
  const [popup, setPopup] = React.useState({
    show: false,
    id: 0,
  })

  /*Patch record*/
  useEffect(() => {
    ;(async () => {
      await fetchMiddleWare(`SidRpWorkflow1/GetAllSidRpWorkflow1`)
        .then((response: any) => {
          console.log(response)
          setApprovalData(response)
        })
        .catch((error: any) => {
          console.error('Exception happened:ApprovalLineLookup', error)
        })
    })()
  }, [])

  /*New Record*/
  const submitNewRegionApproval = (e: any) => {
    e.preventDefault()
    if (newWorkflowOrder === '' || newRegionManager === '') {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
    } else {
      addNewRegionApproval()
      setToggleNewMemeber(false)
      resetNewRegionApproval()
    }
  }

  const submitNewRegionApprovalAndContinue = (e: any) => {
    e.preventDefault()
    if (newWorkflowOrder === '' || newRegionManager === '') {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
      setSubmitAndContinueFlag(false)
    } else {
      addNewRegionApproval()
      setToggleNewMemeber(true)
      resetNewRegionApproval()
      setSubmitAndContinueFlag(true)
    }
  }

  const addNewRegionApproval = () => {
    const requestObject = {
      WorkflowOrder: newWorkflowOrder,
      RegionManager: newRegionManager,
      IsActive: true,
    }
    ;(async () => {
      await fetchPostMiddleWare(`SidRpWorkflow1/CreateSidRpWorkflow1`, requestObject)
        .then((response: any) => {
          console.log('addNewRegion', response)
          if (response.isActive) {
            const refreshedData = [...approvalData, response]
            setApprovalData(refreshedData)
            toast.success('Data added successfully.')
          }
        })
        .catch((error: any) => {
          toast.error('Error happened. Please try again or check BI team.')
          console.error('Exception happened:addNewRegion', error)
        })
    })()
  }

  const resetNewRegionApproval = () => {
    setNewRegionManager('')
    setNewWorkflowOrder('')
  }
  /*New Record*/

  /*Confirmation box*/
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

  const handleConfirmationClose = () => {
    setPopup({
      show: false,
      id: 0,
    })
  }
  /*Confirmation box*/

  /*Patch request*/
  function handleWorkflowOrder(workflowOrderValue: any, id: number) {
    console.log('handleWorkflowOrder', workflowOrderValue)
    const requestObject = [
      {
        op: 'replace',
        value: workflowOrderValue,
        path: '/workfloworder',
      },
      {
        op: 'replace',
        value: getCurrentDateAndTime(),
        path: '/modifydate',
      },
    ]
    console.log('handleRegionManager', requestObject)
    ;(async () => {
      await PatchMiddleWare(`SidRpWorkflow1/UpdateSidRpWorkflow1?id=${id}`, requestObject).then(
        (response: any) => {
          console.log('handleRegionManager', response)
          if (response.status === 200) {
            const cellText: any = approvalData.filter((x) => {
              return x.id === id
            })
            console.log('cellText', cellText)
            cellText[0].workflowOrder = workflowOrderValue
            const refreshedData = [...approvalData]
            setApprovalData(refreshedData)
            toast.success('Data updated successfully.')
          } else toast.error('Data updation failed.')
        }
      )
    })()
  }

  function handleRegionManager(regionMangerValue: any, id: number) {
    console.log('handleRegionManager', regionMangerValue)
    const requestObject = [
      {
        op: 'replace',
        value: regionMangerValue,
        path: '/regionmanager',
      },
      {
        op: 'replace',
        value: getCurrentDateAndTime(),
        path: '/modifydate',
      },
    ]
    console.log('handleRegionManager', requestObject)
    ;(async () => {
      await PatchMiddleWare(`SidRpWorkflow1/UpdateSidRpWorkflow1?id=${id}`, requestObject).then(
        (response: any) => {
          console.log('handleRegionManager', response)
          if (response.status === 200) {
            const cellText: any = approvalData.filter((x) => {
              return x.id === id
            })
            console.log('cellText', cellText)
            cellText[0].regionManager = regionMangerValue
            const refreshedData = [...approvalData]
            setApprovalData(refreshedData)
            toast.success('Data updated successfully.')
          } else toast.error('Data updation failed.')
        }
      )
    })()
  }

  /*Delete records*/
  const deleteSingleeWorkflow = (id: number) => {
    ;(async () => {
      await DeleteMiddleWare(`SidRpWorkflow1/DeleteSidRpWorkflow1ById?id=${id}`)
        .then((response: any) => {
          if (response.status === 204) {
            console.log('deleteRegion', response)
            setApprovalData(approvalData.filter((ele: IWorkFlowRegionData) => ele.id !== id))
            toast.success('Data deleted successfully.')
          }
        })
        .catch((error: any) => {
          toast.success('Error happened. Please try again or check BI team.')
          console.error('Exception happened:delateRegion', error)
        })
    })()
  }

  const delateMultipleWorkflows = (deletingWorkflowIds: number[]) => {
    console.log('delateMultipleWorkflows')
    if (deletingWorkflowIds.length > 0) {
      ;(async () => {
        await DeleteBulkMiddleWare(`SidRpWorkflow1/DeleteSidRpWorkflow1InBulk`, deletingWorkflowIds)
          .then((response: any) => {
            if (response.status === 204) {
              setApprovalData(
                approvalData.filter(
                  (ele: IWorkFlowRegionData) => !deletingWorkflowIds.includes(ele.id)
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
    if (popup.id > 0) deleteSingleeWorkflow(popup.id)
    else if (
      // popup.id === 0 &&
      approvalData.filter((f: IWorkFlowRegionData) => f.deleteCheck === true).length > 0
    ) {
      console.log(
        'total checked data',
        approvalData.filter((f: IWorkFlowRegionData) => f.deleteCheck === true).length
      )
      const checkedDeletedIds = approvalData
        .filter((f: IWorkFlowRegionData) => f.deleteCheck === true)
        .map((x: IWorkFlowRegionData) => x.id)
      console.log('checkedDeletedIds', checkedDeletedIds)
      delateMultipleWorkflows(checkedDeletedIds)
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
    approvalData.map((item: IWorkFlowRegionData) => {
      return (item.deleteCheck = status)
    })
    console.log('refreshedData', approvalData)
    setDeleteAllCheck(status)
  }

  const checkToMarkCheckAllCheckbox = () => {
    if (deleteAllCheck) {
      //true
      if (approvalData.filter((f: IWorkFlowRegionData) => f.deleteCheck === false).length >= 1) {
        setDeleteAllCheck(false)
      }
    }
    if (deleteAllCheck === false) {
      if (approvalData.filter((f: IWorkFlowRegionData) => f.deleteCheck === true).length >= 1) {
        setDeleteAllCheck(false)
      }
    }

    if (
      approvalData.filter((f: IWorkFlowRegionData) => f.deleteCheck === false).length ===
      approvalData.length
    ) {
      setDeleteAllCheck(false)
    }

    if (
      approvalData.filter((f: IWorkFlowRegionData) => f.deleteCheck === true).length ===
      approvalData.length
    ) {
      setDeleteAllCheck(true)
    }
  }

  const toggleDeleteCheck = (e: any, id: number) => {
    const toggledRegionCheck: any = approvalData.filter((f: IWorkFlowRegionData) => f.id === id)
    if (e.target.checked) {
      toggledRegionCheck[0].deleteCheck = true
    } else {
      toggledRegionCheck[0].deleteCheck = false
    }
    const refreshedData = [...approvalData]
    setApprovalData(refreshedData)
    checkToMarkCheckAllCheckbox()
  }
  /*Delete records*/

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Workflow for Approval</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{approvalData.length} members</span>
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
              setSubmitAndContinueFlag(false)
            }}
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />+ New
            Member
          </button>
          <button
            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
            onClick={() => setConfirmationOpen(0)}
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
                <th className='min-w-150px text-hover-primary'>Authors</th>
                <th className='min-w-100px text-end'></th>
              </tr>
            </thead>
            <tbody>
              {approvalData
                .sort((a, b) => a.workflowOrder - b.workflowOrder)
                .map((regionItem: IWorkFlowRegionData) => {
                  return (
                    <tr key={regionItem.id}>
                      <td>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            key={'deleteCheckbox_' + regionItem.id}
                            checked={regionItem.deleteCheck}
                            onChange={(e) => toggleDeleteCheck(e, regionItem.id)}
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={defaultImageSvg} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <span
                              className='text-muted fw-bold text-muted d-block fs-7 text-hover-gray-800'
                              style={{width: '350px'}}
                            >
                              <EditableReactSelect
                                doubleClick={true}
                                id='regionManagerName'
                                data={users}
                                itemId={regionItem.id}
                                selectedValue={regionItem.regionManager}
                                isEnabled={false}
                                onChange={(e: any) => {
                                  setSubmitAndContinueFlag(false)
                                  handleRegionManager(e, regionItem.id)
                                  trackEvent({
                                    Path: '/sid-rp-regions/lookup',
                                    DomSelector: 'sid-rp-regions-lookup-manager-select-input',
                                  })
                                }}
                              >
                                {regionItem.regionManager}
                              </EditableReactSelect>
                            </span>
                            <span className='text-muted fw-bold text-muted d-block fs-7 text-hover-gray-800'>
                              <EditableContainer
                                id='workflowOrder'
                                doubleClick={true}
                                handleEnter={(e: any) => {
                                  handleWorkflowOrder(e, regionItem.id)
                                }}
                                // className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                              >
                                {regionItem.workflowOrder}
                              </EditableContainer>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-end flex-shrink-0'>
                          <button
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                            onClick={() => setConfirmationOpen(regionItem.id)}
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
      <Modal
        show={toggleNewMemeber}
        onHide={() => {
          trackEvent({
            Path: 'RegionsLookup',
            DomSelector: 'hide-modal-button',
          })
          setToggleNewMemeber(false)
        }}
        style={{width: '90vw'}}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton={false}>
          <Modal.Title id='contained-modal-title-vcenter'>
            <span style={{fontSize: '15px'}}>Workflow for Approval</span>
          </Modal.Title>
          {submitAndContinueFlag && (
            <span className='fw-bolder text-hover-primary' style={{fontSize: '15px', color: 'red'}}>
              Record added successfully, screen resetted for new entry
            </span>
          )}
          <button
            onClick={() => {
              trackEvent({
                Path: 'new-region-member-modal',
                DomSelector: 'submit-new-region-approval-button',
              })
              setToggleNewMemeber(false)
            }}
            className='btn btn-sm btn-light-primary'
            type='submit'
            style={{marginTop: '14px', height: '40px', width: '80px'}}
          >
            Close
          </button>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              trackEvent({
                Path: 'new-region-member',
                DomSelector: 'submit-new-region-approval-button',
              })
            }}
          >
            <table className='table table-row-dashed table-row-gray-100 align-middle gs-0 gy-4'>
              <thead>
                <tr className='fw-bolder text-muted'>
                  <th className='min-w-250px text-hover-primary'>Regional Manager</th>
                  <th className='min-w-150px text-hover-primary'>Workflow order</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='d-flex flex-column w-100 me-2'>
                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                          <Select
                            components={{
                              DropdownIndicator: () => null,
                              IndicatorSeparator: () => null,
                              CrossIcon: () => null,
                            }}
                            id='NewRegionManager'
                            options={users}
                            isLoading={!users || users.length === 0}
                            isSearchable={true}
                            isClearable={false}
                            styles={newSelectStyle}
                            placeholder='Afiniti People'
                            value={{
                              value: newRegionManager,
                              label: newRegionManager,
                            }}
                            onChange={(e: any) => {
                              setNewRegionManager(e.value)
                              setSubmitAndContinueFlag(false)
                              trackEvent({
                                Path: '/sid-rp-new-regions-approval/lookup',
                                DomSelector: 'sid-rp-regions-lookup-new-approval-select-input',
                              })
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className='text-start'>
                    <div className='d-flex justify-content-start flex-column'>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        <input
                          onChange={(e) => {
                            setSubmitAndContinueFlag(false)
                            setNewWorkflowOrder(e.target.value)
                          }}
                          name='workflowOrder'
                          className='form-control'
                          type='text'
                          placeholder='Workflow Order'
                          value={newWorkflowOrder}
                          style={{width: '100%', marginRight: '30px'}}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='text-start'>
                    <button
                      className='btn btn-bg btn-light-primary'
                      type='submit'
                      style={{marginTop: '14px'}}
                      onClick={(e) => {
                        submitNewRegionApprovalAndContinue(e)
                        trackEvent({
                          Path: 'new-region-approval',
                          DomSelector: 'submit-new-region-approval-button',
                        })
                      }}
                    >
                      Submit and Add New
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-bg btn-light-primary'
                      type='submit'
                      style={{marginTop: '14px'}}
                      onClick={(e) => {
                        submitNewRegionApproval(e)
                        trackEvent({
                          Path: 'new-region-approval',
                          DomSelector: 'submit-new-region-approval-button',
                        })
                      }}
                    >
                      Submit {'>'}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </Modal.Body>
      </Modal>
      <Dialog
        open={popup.show}
        onClose={handleConfirmationClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Confirm to proceed?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure to delete the record(s)?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            className='btn btn-sm btn-light-primary me-8'
            onClick={setForDeletionInConfirmationOpen}
          >
            Continue
          </button>
          <button className='btn btn-sm btn-light-primary me-8' onClick={handleConfirmationClose}>
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export {ApprovalLineLookup}
