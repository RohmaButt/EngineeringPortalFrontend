/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap-v5'
import {useTracking} from 'react-tracking'
import Select from 'react-select'
import {fetchPostMiddleWare} from '../../../pages/dashboard/utils/apiMiddleWare'
import {toast} from 'react-toastify'
import {
  dedicatedData,
  INewResourceModelRolesModalProps,
  IResouceModelGroup,
  shiftsData,
  statusData,
} from '../../shared/Types/sharedITypes'
import TextField from '@mui/material/TextField'
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete'
import {getResourceModelGroupsFromDB} from '../../shared/Services/sharedAPIsService'
const filter = createFilterOptions<IResouceModelGroup>()

const style = {
  control: (base: any) => ({
    ...base,
    '&:hover': {
      color: 'black',
    },
    border: '1px solid #a1a5b7',
    boxShadow: 'none',
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    '&:hover': {
      color: 'inherit',
    },
    height: '100%',
    color: '#a1a5b7',
  }),
}

const NewResourceModelRolesLookup: FC<INewResourceModelRolesModalProps> = (props) => {
  const {trackEvent} = useTracking()
  const [submitAndContinueFlag, setSubmitAndContinueFlag] = useState(false)
  const [newResourceModelName, setNewResourceModelName] = useState('')
  const [newSubDepartmentCode, setNewSubDepartmentCode] = useState('')
  const [newSubDepartment, setNewSubDepartment] = useState('')
  const [newShifts, setNewShifts] = useState('')
  const [newIsDedicated, setNewIsDedicated] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [newStatusCode, setNewStatusCode] = useState('')
  const [resourceModelGroups, setResourceModelGroups] = useState<any[]>([])
  const [value, setValue] = useState<IResouceModelGroup | null>(null)

  useEffect(() => {
    ;(async () => {
      getResourceModelGroupsDataFromDB()
    })()
  }, [])

  async function getResourceModelGroupsDataFromDB() {
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
  }

  const addNew = () => {
    console.log('value', value)
    const requestObject = {
      RoleResourceModel: newResourceModelName,
      RoleGroupId: value?.value,
      RoleGroupName: value?.label,
      PaycomSubDepartment: newSubDepartmentCode,
      Status: newStatusCode,
      IsDedicated: newIsDedicated,
      Shifts: newShifts,
      IsActive: true,
    }
    ;(async () => {
      await fetchPostMiddleWare(`ResourceModelRoles/CreateResourceModelRole`, requestObject)
        .then((response: any) => {
          console.log('CreateResourceModelRole', response)
          if (response.isActive) {
            const refreshedData = [...props.resouceModelData, response]
            props.setResounceModelData(refreshedData)
            toast.success('Data added successfully.')
            if (value?.value !== response.roleGroupId && value?.label !== response.roleGroupName) {
              addGroupInAutocomplete(response.roleGroupId, response.roleGroupName)
            }
          }
        })
        .catch((error: any) => {
          toast.error('Error happened. Please try again or check BI team.')
          console.error('Exception happened:CreateResourceModelRole', error)
        })
    })()
  }

  const submitNew = (e: any) => {
    e.preventDefault()
    if (
      value?.label === '' ||
      newResourceModelName === '' ||
      newSubDepartment === '' ||
      newIsDedicated === '' ||
      newShifts === '' ||
      newStatusCode === ''
    ) {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
    } else {
      addNew()
      props.setToggleNewResounceModel(false)
      resetNew()
    }
  }

  const submitNewAndContinue = (e: any) => {
    e.preventDefault()
    if (
      value?.label === '' ||
      newResourceModelName === '' ||
      newSubDepartment === '' ||
      newIsDedicated === '' ||
      newShifts === '' ||
      newStatusCode === ''
    ) {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
      setSubmitAndContinueFlag(false)
    } else {
      addNew()
      props.setToggleNewResounceModel(true)
      resetNew()
      setSubmitAndContinueFlag(true)
      // getResourceModelGroupsDataFromDB()
    }
  }

  const resetNew = () => {
    setNewResourceModelName('')
    setValue(null)
    setNewSubDepartmentCode('')
    setNewSubDepartment('')
    setNewShifts('')
    setNewIsDedicated('')
    setNewStatusCode('')
    setNewStatus('')
  }

  const addGroupInAutocomplete = (grpId: number, grpName: String) => {
    const newGrp = {value: grpId, label: grpName}
    const a = [...resourceModelGroups, newGrp]
    console.log('a', a)
  }
  return (
    <Modal
      show={props.toggleNewResounceModel}
      onHide={() => {
        trackEvent({
          Path: 'resource-model-mapping-Lookup-modal',
          DomSelector: 'hide-modal-resource-model-mapping-lookup-modal-button',
        })
        props.setToggleNewResounceModel(false)
      }}
      size='lg'
      aria-labelledby='contained-modal-label-vcenter'
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id='contained-modal-label-vcenter'>
          <span style={{fontSize: '15px'}}>New</span>
        </Modal.Title>
        {submitAndContinueFlag && (
          <span
            className='fw-bolder text-hover-primary'
            style={{fontSize: '15px', color: 'red', marginLeft: '150px'}}
          >
            Record added successfully, screen resetted for new entry
          </span>
        )}
        <button
          onClick={(e) => {
            trackEvent({
              Path: 'new-resource-model-mapping-modal',
              DomSelector: 'submit-new-resource-model-mapping-button',
            })
            props.setToggleNewResounceModel(false)
          }}
          className='btn btn-sm btn-light-primary'
          type='submit'
          style={{marginTop: '14px', height: '40px', width: '80px'}}
        >
          Close
        </button>
      </Modal.Header>
      <Modal.Body>
        <table className='table table-row-dashed table-row-gray-100 align-middle gs-0 gy-4'>
          <thead>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>Role Resource Model</th>
            </tr>
          </thead>
          <tbody>
            <tr key='modal-new-memeber0'>
              <td colSpan={3}>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='fw-bold text-muted d-block fs-7'>
                      <input
                        onChange={(e) => {
                          setNewResourceModelName(e.target.value)
                          setSubmitAndContinueFlag(false)
                        }}
                        name='newResourceModelName'
                        className='form-control'
                        type='text'
                        placeholder=''
                        value={newResourceModelName}
                        style={{width: '100%', marginRight: '30px'}}
                      />
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-150px text-hover-primary'>Role Group Name</th>
            </tr>
            <tr key='modal-new-memeber1'>
              <td colSpan={3}>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='fw-bold text-muted d-block fs-7'>
                      <Autocomplete
                        value={value}
                        onChange={(event, newValue: any) => {
                          if (typeof newValue === 'string') {
                            setValue({
                              label: newValue,
                            })
                          } else if (newValue && newValue.inputValue) {
                            // Create a new value from the user input
                            setValue({
                              label: newValue.inputValue,
                            })
                          } else {
                            setValue(newValue)
                          }
                        }}
                        filterOptions={(options: any, params) => {
                          const filtered = filter(options, params)
                          const {inputValue} = params
                          // Suggest the creation of a new value
                          const isExisting = options.some(
                            (option: any) => inputValue === option.label
                          )
                          if (inputValue !== '' && !isExisting) {
                            filtered.push({
                              inputValue,
                              label: `Add "${inputValue}"`,
                            })
                          }
                          return filtered
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        id='newGrp'
                        options={resourceModelGroups}
                        getOptionLabel={(option: any) => {
                          // Value selected with enter, right from the input
                          if (typeof option === 'string') {
                            return option
                          }
                          // Add "xxx" option created dynamically
                          if (option.inputValue) {
                            return option.inputValue
                          }
                          // Regular option
                          return option.label
                        }}
                        renderOption={(props, option: any) => <li {...props}>{option.label}</li>}
                        // sx={{width: 750}}
                        style={{width: 750}}
                        freeSolo
                        renderInput={(params) => (
                          <TextField {...params} variant='outlined' fullWidth label='Search' />
                        )}
                      />
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th colSpan={2} className='min-w-250px text-hover-primary'>
                Paycom Sub Department
              </th>
              <th className='min-w-250px text-hover-primary'>Code</th>
            </tr>
            <tr key='modal-new-memeber2'>
              <td className='text-start' colSpan={2}>
                <div className='d-flex justify-content-start flex-column'>
                  <Select
                    id='departments'
                    options={props.departments}
                    isLoading={!props.departments || props.departments.length === 0}
                    isSearchable={false}
                    isClearable={false}
                    escapeClearsValue={false}
                    styles={style}
                    placeholder='Select'
                    autoFocus
                    onChange={(e: any) => {
                      setNewSubDepartment(e.label)
                      setNewSubDepartmentCode(e.value)
                    }}
                    value={{
                      value: newSubDepartmentCode,
                      label: newSubDepartment,
                    }}
                  />
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='fw-bold text-muted d-block fs-7 text-hover-primary'>
                      {newSubDepartmentCode || ''}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>Status</th>
              <th className='min-w-150px text-hover-primary'>Is Dedicated</th>
              <th className='min-w-250px text-hover-primary'>Shifts</th>
            </tr>
            <tr key='modal-new-memeber4'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='fw-bold text-muted d-block fs-7'>
                      <Select
                        id='statusData'
                        options={statusData}
                        isLoading={!statusData || statusData.length === 0}
                        isSearchable={false}
                        isClearable={false}
                        escapeClearsValue={false}
                        styles={style}
                        placeholder='Select'
                        autoFocus
                        onChange={(e: any) => {
                          setNewStatus(e.label)
                          setNewStatusCode(e.value)
                        }}
                        value={{
                          value: newStatusCode,
                          label: newStatus,
                        }}
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td className='text-start'>
                <div className='d-flex justify-content-start flex-column'>
                  <Select
                    id='dedicatedData'
                    options={dedicatedData}
                    isLoading={!dedicatedData || dedicatedData.length === 0}
                    isSearchable={false}
                    isClearable={false}
                    escapeClearsValue={false}
                    styles={style}
                    placeholder='Select'
                    autoFocus
                    onChange={(e: any) => {
                      setNewIsDedicated(e.value)
                    }}
                    value={{
                      value: newIsDedicated,
                      label: newIsDedicated,
                    }}
                  />
                </div>
              </td>
              <td className='text-start'>
                <div className='d-flex justify-content-start flex-column'>
                  <Select
                    id='shiftsData'
                    options={shiftsData}
                    isLoading={!shiftsData || shiftsData.length === 0}
                    isSearchable={false}
                    isClearable={false}
                    escapeClearsValue={false}
                    styles={style}
                    onChange={(e: any) => {
                      setNewShifts(e.value)
                    }}
                    placeholder='Select'
                    autoFocus
                    value={{
                      value: newShifts,
                      label: newShifts,
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <div className='d-flex flex-row justify-content-between'>
                  <button
                    className='btn btn-bg btn-light-primary'
                    type='submit'
                    style={{marginTop: '14px'}}
                    onClick={(e) => {
                      submitNewAndContinue(e)
                      trackEvent({
                        Path: 'new-resource-model-mapping',
                        DomSelector: 'submit-new-resource-model-mapping-button',
                      })
                    }}
                  >
                    Submit and Add New One
                  </button>
                  <button
                    className='btn btn-bg btn-light-primary'
                    type='submit'
                    style={{marginTop: '14px'}}
                    onClick={(e) => {
                      submitNew(e)
                      trackEvent({
                        Path: 'new-resource-model-mappingr',
                        DomSelector: 'submit-new-resource-model-mapping-button',
                      })
                    }}
                  >
                    Submit
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  )
}

export {NewResourceModelRolesLookup}
