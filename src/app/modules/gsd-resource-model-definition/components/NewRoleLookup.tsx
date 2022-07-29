/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import { Modal } from 'react-bootstrap-v5'
import { useTracking } from 'react-tracking'
import { fetchPostMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import { toast } from 'react-toastify'
import { IGenericLookup, INewRolesModalProps } from '../../shared/Types/sharedITypes'
import Select from 'react-select'
import EditableReactSelect from '../../shared/EditableReactSelect/EditableReactSelect'

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

const NewRoleLookup: FC<INewRolesModalProps> = (props) => {
  const { trackEvent } = useTracking()
  /*New Record*/
  const [newName, setNewName] = useState('')
  const [newShiftCount, setNewShiftCount] = useState(0)
  const [newDeptId, setNewDeptId] = useState(0)
  const [newDeptName, setNewDeptName] = useState('')
  const [newSubDeptId, setNewSubDeptId] = useState(0)
  const [newSubDeptName, setNewSubDeptName] = useState('')
  const [newTeamId, setNewTeamId] = useState(0)
  const [newTeamName, setNewTeamName] = useState('')

  const addNewMember = () => {
    const requestObject = {
      Name: newName,
      DepartmentId: newDeptId,
      SubdepartmentId: newSubDeptId,
      TeamId: newTeamId,
      IsActive: true,
      ShiftCount: newShiftCount
    }
      ; (async () => {
        await fetchPostMiddleWare(`RmRoles/CreateRole`, requestObject)
          .then((response: any) => {
            if (response.isActive) {
              const refreshedData = [...props.Data, response]
              props.setData(refreshedData)
              toast.success('Data added successfully.')
            }
          })
          .catch((error: any) => {
            toast.error('Error happened. Please try again or check BI team.')
            console.error('Exception happened:CreateRevenueBracket', error)
          })
      })()
  }

  const validateDuplicateName = (inputValue: string) => {
    let counter = props.Data.filter((f: any) => f.name === inputValue).length;
    if (counter > 0)
      return true
    else return false
  }

  const submitNew = (e: any) => {
    e.preventDefault()
    if (newName === '' || newDeptName === '' || newSubDeptName === '' || newTeamName === '') {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
    } else if (validateDuplicateName(newName)) {
      toast.error(`A Role Name with "${newName}" already exist. It should be unique, please update your name`)
    } else {
      addNewMember()
      props.setToggleNewMemeber(false)
      resetDefault()
    }
  }

  const resetDefault = () => {
    setNewName('')
    setNewDeptId(0)
    setNewDeptName('')
    setNewSubDeptId(0)
    setNewSubDeptName('')
    setNewTeamId(0)
    setNewTeamName('')
    setNewShiftCount(0)
  }

  /*Add records*/
  return (
    <Modal
      show={props.toggleNewMemeber}
      onHide={() => {
        trackEvent({
          Path: 'NewBracketLookup',
          DomSelector: 'hide-modal-New-Bracket-button',
        })
        props.setToggleNewMemeber(false)
      }}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id='contained-modal-title-vcenter'>
          <span style={{ fontSize: '15px' }}>New Role</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className='table table-row-dashed table-row-gray-100 align-middle gs-0 gy-4'>
          <thead>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>Department</th>
              <th className='min-w-250px text-hover-primary'>Sub Department</th>
              <th className='min-w-250px text-hover-primary'>Team</th>
            </tr>
          </thead>
          <tbody>
            <tr key='modal-new-memeber-0'>
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
                        id='DepartmentId'
                        options={props.departments}
                        isLoading={!props.departments || props.departments.length === 0}
                        isSearchable={true}
                        isClearable={false}
                        styles={newSelectStyle}
                        placeholder='Department'
                        value={{
                          value: newDeptId,
                          label: newDeptName,
                        }}
                        onChange={(e: any) => {
                          setNewDeptId(e.value)
                          setNewDeptName(e.label)
                          trackEvent({
                            Path: '/rm-new-role/lookup',
                            DomSelector: 'rm-new-role-departments-select-input',
                          })
                        }}
                      />
                    </span>
                  </div>
                </div>
              </td>
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
                        id='SubDepartmentId'
                        options={props.subDepartments.filter((f: IGenericLookup) => f.associatedType === newDeptId)}
                        isLoading={!props.subDepartments || props.subDepartments.length === 0}
                        isSearchable={true}
                        isClearable={false}
                        styles={newSelectStyle}
                        placeholder='Sub Department'
                        value={{
                          value: newSubDeptId,
                          label: newSubDeptName,
                        }}
                        onChange={(e: any) => {
                          setNewSubDeptId(e.value)
                          setNewSubDeptName(e.label)
                          trackEvent({
                            Path: '/rm-new-role/lookup',
                            DomSelector: 'rm-new-role-subdepartments-select-input',
                          })
                        }}
                      />
                    </span>
                  </div>
                </div>
              </td>
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
                        id='TeamId'
                        options={props.teams.filter((f: IGenericLookup) => f.associatedType === newSubDeptId)}
                        isLoading={!props.teams || props.teams.length === 0}
                        isSearchable={true}
                        isClearable={false}
                        styles={newSelectStyle}
                        placeholder='Team'
                        value={{
                          value: newTeamId,
                          label: newTeamName,
                        }}
                        onChange={(e: any) => {
                          setNewTeamId(e.value)
                          setNewTeamName(e.label)
                          trackEvent({
                            Path: '/rm-new-role/lookup',
                            DomSelector: 'rm-new-role-teams-select-input',
                          })
                        }}
                      />

                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>Name</th>
              <th className='min-w-250px text-hover-primary'>Shift count</th>
              <th className='min-w-250px text-hover-primary'></th>
            </tr>
            <tr key='modal-new-memeber-1'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      <input
                        onChange={(e) => {
                          setNewName(e.target.value)
                        }}
                        name='newName'
                        className='form-control'
                        placeholder=''
                        value={newName}
                        style={{ width: '100%', marginRight: '30px' }}
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      <input
                        onChange={(e) => {
                          setNewShiftCount(parseFloat(e.target.value))
                        }}
                        name='newShiftCount'
                        className='form-control'
                        type="number"
                        placeholder=''
                        value={newShiftCount}
                        style={{ width: '100%', marginRight: '30px' }}
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {' '}
              </td>
              <td>
                {' '}
              </td>
              <td className='d-flex justify-content-end'>
                <button
                  onClick={(e) => {
                    trackEvent({
                      Path: 'new-bracket-member-modal',
                      DomSelector: 'submit-new-bracket-member-button',
                    })
                    props.setToggleNewMemeber(false)
                  }}
                  className='btn btn-sm btn-light-primary me-4'
                  type='submit'
                  style={{ marginTop: '14px', height: '40px', width: '80px' }}
                >
                  Cancel
                </button>
                <button
                  className='btn btn-bg btn-light-primary'
                  type='submit'
                  style={{ marginTop: '14px', height: '40px', width: '80px' }}
                  onClick={(e) => {
                    submitNew(e)
                    trackEvent({
                      Path: 'new-bracket-member',
                      DomSelector: 'submit-new-bracket-member-button',
                    })
                  }}
                >
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
    </Modal >
  )
}

export { NewRoleLookup }
