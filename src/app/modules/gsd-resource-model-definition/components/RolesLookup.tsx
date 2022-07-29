/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { KTSVG } from '../../../../_metronic/helpers'
import { PatchMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import 'react-toastify/dist/ReactToastify.css'
import { getCurrentDateAndTime } from '../../../../setup/appConstants'
import EditableContainer from '../../shared/EditableContainer/EditableContainer'
import { useTracking } from 'react-tracking'
import Tooltip from '@mui/material/Tooltip'
import { GetDepartments, getRolesFromDB, GetSubDepartments, GetTeams } from '../../shared/Services/resourceModelDefinitionService'
import { NewRoleLookup } from './NewRoleLookup'
import { IGenericLookup, IRoles } from '../../shared/Types/sharedITypes'
import EditableReactSelect from '../../shared/EditableReactSelect/EditableReactSelect'

type Props = {
  className: string
}

const RolesLookup: React.FC<Props> = ({ className }) => {
  const [toggleNewMemeber, setToggleNewMemeber] = useState(false)
  const { trackEvent } = useTracking()
  const [lookupData, setLookupData] = useState<any[]>([])
  const [departments, setDepartments] = useState<IGenericLookup[]>([])
  const [subDepartments, setSubDepartments] = useState<IGenericLookup[]>([])
  const [teams, setTeams] = useState<IGenericLookup[]>([])

  useEffect(() => {
    ; (async () => {
      await GetDepartments()
        .then((response: any) => {
          if (response != null) {
            setDepartments(
              response.data.map((data: any) => {
                return {
                  value: data.id,
                  label: data.name,
                }
              })
            )
          }
        })
        .catch(function (error) {
          if (error) {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('error:GetDepartments', error)
          }
        })
      await GetSubDepartments()
        .then((response: any) => {
          if (response != null) {
            setSubDepartments(
              response.data.map((data: any) => {
                return {
                  value: data.id,
                  label: data.name,
                  associatedType: data.departmentId
                }
              })
            )
          }
        })
        .catch(function (error: any) {
          if (error) {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('error:GetSubDepartments', error)
          }
        })
      await GetTeams()
        .then((response: any) => {
          if (response != null) {
            setTeams(
              response.data.map((data: any) => {
                return {
                  value: data.id,
                  label: data.name,
                  associatedType: data.subdepartmentId
                }
              })
            )
          }
        })
        .catch(function (error) {
          if (error) {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('error:GetTeams', error)
          }
        })
      await getRolesFromDB()
        .then((response: any) => {
          if (response != null) {
            setLookupData(
              response.map((item: IRoles) => {
                return {
                  departmentId: item.departmentId,
                  id: item.id,
                  isActive: item.isActive,
                  name: item.name,
                  shiftCount: item.shiftCount,
                  subdepartmentId: item.subdepartmentId,
                  teamId: item.teamId
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getRolesFromDB', error)
        })
    })()
  }, [])

  function handlePatchRequest(newValue: any, id: number, patchType: string) {
    if (validateDuplicateName(newValue)) {
      toast.error(`A Role Name with "${newValue}" already exist. It should be unique, please update your name`)
    }
    else {
      const requestObject = [
        {
          op: 'replace',
          value: newValue,
          path: '/' + patchType,
        },
        {
          op: 'replace',
          value: getCurrentDateAndTime(),
          path: '/modifiedAt',
        },
      ]
        ; (async () => {
          await PatchMiddleWare(`RmRoles/UpdateRole?id=${id}`, requestObject).then(
            (response: any) => {
              if (response.status === 200) {
                const cellText: any = lookupData.filter((x) => {
                  return x.id === id
                })
                switch (patchType) {
                  case 'name':
                    cellText[0].name = newValue
                    break;
                  case 'DepartmentId':
                    cellText[0].departmentId = newValue
                    break;
                  case 'SubDepartmentId':
                    cellText[0].subdepartmentId = newValue
                    break;
                  case 'TeamId':
                    cellText[0].teamId = newValue
                    break;
                  case 'shiftCount':
                    cellText[0].shiftCount = newValue
                    break;
                }
                const refreshedData = [...lookupData]
                setLookupData(refreshedData)
                toast.success('Data updated successfully.')
              } else toast.error('Data updation failed.')
            }
          )
        })()
    }
  }

  /* Validation Duplicate Name*/
  const validateDuplicateName = (inputValue: string) => {
    let counter = lookupData.filter((f: any) => f.name === inputValue).length;
    if (counter > 0)
      return true
    else return false
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Roles</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{lookupData.length || 0} Roles</span>
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
            Role
          </button>
        </div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px text-hover-primary'>Department</th>
                <th className='min-w-150px text-hover-primary'>Sub Department</th>
                <th className='min-w-150px text-hover-primary'>Team</th>
                <th className='min-w-150px text-hover-primary'>Name</th>
                <th className='min-w-150px text-hover-primary'>Shift Count</th>
              </tr>
            </thead>
            <tbody>
              {lookupData
                .sort((a, b) => a.id - b.id)
                .map((item: IRoles) => {
                  return (
                    <tr key={item.id}>
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
                              <EditableReactSelect
                                doubleClick={true}
                                id='DepartmentId'
                                data={departments}
                                itemId={item.id}
                                selectedValue={item.departmentId}
                                isEnabled={false}
                                onChange={(e: any) => {
                                  handlePatchRequest(e, item.id, 'DepartmentId')
                                  trackEvent({
                                    Path: '/rm-roles/lookup',
                                    DomSelector: 'rm-roles-lookup-departments-select-input',
                                  })
                                }}
                              >
                                {departments.filter((f: IGenericLookup) => f.value === item.departmentId)[0].label}
                              </EditableReactSelect>
                            </span>
                          </Tooltip>
                        </div>
                      </td>
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
                              <EditableReactSelect
                                doubleClick={true}
                                id='SubdepartmentId'
                                data={subDepartments.filter((f: IGenericLookup) => f.associatedType === item.departmentId)}
                                itemId={item.id}
                                selectedValue={item.subdepartmentId}
                                isEnabled={false}
                                onChange={(e: any) => {
                                  handlePatchRequest(e, item.id, 'SubDepartmentId')
                                  trackEvent({
                                    Path: '/rm-roles/lookup',
                                    DomSelector: 'rm-roles-lookup-subdepartments-select-input',
                                  })
                                }}
                              >
                                {subDepartments.filter((f: IGenericLookup) => f.value === item.subdepartmentId)[0].label}
                              </EditableReactSelect>
                            </span>
                          </Tooltip>
                        </div>
                      </td>
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
                              <EditableReactSelect
                                doubleClick={true}
                                id='teamId'
                                data={teams.filter((f: IGenericLookup) => f.associatedType === item.subdepartmentId)}
                                itemId={item.id}
                                selectedValue={item.teamId}
                                isEnabled={false}
                                onChange={(e: any) => {
                                  handlePatchRequest(e, item.id, 'TeamId')
                                  trackEvent({
                                    Path: '/rm-roles/lookup',
                                    DomSelector: 'rm-roles-lookup-teamId-select-input',
                                  })
                                }}
                              >
                                {teams.filter((f: IGenericLookup) => f.value === item.teamId)[0].label}
                              </EditableReactSelect>
                            </span>
                          </Tooltip>
                        </div>
                      </td>
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
                                  handlePatchRequest(e, item.id, 'name')
                                }}
                                className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                              >
                                {item.name}
                              </EditableContainer>
                            </span>
                          </Tooltip>
                        </div>
                      </td>
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
                                id='shiftCount'
                                doubleClick={true}
                                handleEnter={(e: any) => {
                                  handlePatchRequest(e, item.id, 'shiftCount')
                                }}
                                className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                              >
                                {item.shiftCount}
                              </EditableContainer>
                            </span>
                          </Tooltip>
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
        <NewRoleLookup
          departments={departments}
          subDepartments={subDepartments}
          teams={teams}
          Data={lookupData}
          setData={(refreshedData: any[]) => {
            setLookupData(refreshedData)
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

export { RolesLookup }
