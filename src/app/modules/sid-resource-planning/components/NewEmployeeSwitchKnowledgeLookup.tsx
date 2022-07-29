/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {Modal} from 'react-bootstrap-v5'
import {useTracking} from 'react-tracking'
import Select from 'react-select'
import {toast} from 'react-toastify'
import {
  INewEmployeeSwitchKnowledgeModalProps,
  IResouceModelGroup,
  ISelectookup,
  NewEmployeeSwitchKnowledge,
} from '../../shared/Types/sharedITypes'
import {getCurrentDateAndTime} from '../../../../setup/appConstants'
import {fetchPostMiddleWare} from '../../../pages/dashboard/utils/apiMiddleWare'

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

const NewEmployeeSwitchKnowledgeLookup: FC<INewEmployeeSwitchKnowledgeModalProps> = (props) => {
  const {trackEvent} = useTracking()
  const [submitAndContinueFlag, setSubmitAndContinueFlag] = useState(false)
  const [switchProviderData, setSwitchProviderData] = useState<any[]>(props.switchProviderData)
  const [switchPlatformData, setSwitchPlatformData] = useState<any[]>(props.switchPlatformData)
  const [sidRegionData, setSidRegionData] = useState<any[]>(props.sidRegionData)
  const [newSidEmployeeData, setNewSidEmployeeData] = useState<NewEmployeeSwitchKnowledge[]>(
    props.sidEmployeeData
  )
  const [employeeData, setEmployeeData] = useState<any[]>([])

  const [newWorkEmail, setNewWorkEmail] = useState('')
  const [newCountry, setNewCountry] = useState('')
  const [newFirstSupervisorWorkEmail, setNewFirstSupervisorWorkEmail] = useState('')
  const [newFullName, setFullName] = useState('')
  const [newLegalCountry, setLegalCountry] = useState('')
  const [newTeam, setNewteam] = useState('')
  const [newWorkStatus, setNewWorkStatus] = useState('')
  const [newETLDate, setNewETLDate] = useState('')
  const [newSidRegion, setNewSidRegion] = useState('')
  const [newSwitchProvider, setNewSwitchProvider] = useState('')
  const [newSwitchPlatform, setNewSwitchPlatform] = useState('')

  const [newSidRegionCode, setNewSidRegionCode] = useState('')
  const [newSwitchProviderCode, setNewSwitchProviderCode] = useState('')
  const [newSwitchPlatformCode, setNewSwitchPlatformCode] = useState('')

  useEffect(() => {
    setEmployeeData(
      newSidEmployeeData.map((item: any) => {
        return {
          value: item.workEmail,
          label: item.workEmail,
        }
      })
    )
  }, [newSidEmployeeData])

  const pupoluateEmployeeInfo = (employeeEmail: string) => {
    const employeeInfo = newSidEmployeeData.filter((e) => e.workEmail === employeeEmail)[0]
    console.log('employeeInfo', employeeEmail, employeeInfo)
    setNewWorkEmail(employeeInfo?.workEmail)
    setFullName(employeeInfo?.fullName)
    setNewteam(employeeInfo?.team)
    setNewWorkStatus(employeeInfo?.workStatus)
    setNewFirstSupervisorWorkEmail(employeeInfo?.firstSupervisorWorkEmail)
    setLegalCountry(employeeInfo?.legalCountry)
    setNewCountry(employeeInfo?.country)
  }

  const addNew = () => {
    const requestObject = {
      EmployeeEmail: newWorkEmail,
      SidregionId: newSidRegionCode,
      SwitchProviderId: newSwitchProviderCode,
      SwitchPlatformId: newSwitchPlatformCode,
      IsActive: true,
    }
    ;(async () => {
      await fetchPostMiddleWare(
        `EmployeeSwitchKnowledge/CreateEmployeeSwitchKnowledge`,
        requestObject
      )
        .then((response: any) => {
          console.log('CreateEmployeeSwitchKnowledge', requestObject, response)
          if (response.isActive) {
            // const refreshedData = [...props.resouceModelData, response]
            // props.setResounceModelData(refreshedData)
            toast.success('Data added successfully.')
            // // if (value?.value !== response.roleGroupId && value?.label !== response.roleGroupName) {
            // //   addGroupInAutocomplete(response.roleGroupId, response.roleGroupName)
            // // }
          }
        })
        .catch((error: any) => {
          toast.error('Error happened. Please try again or check BI team.')
          console.error('Exception happened:CreateEmployeeSwitchKnowledge', error)
        })
    })()
  }

  const submitNew = (e: any) => {
    e.preventDefault()
    if (
      newWorkEmail === '' ||
      newSidRegionCode === '' ||
      newSwitchPlatformCode === '' ||
      newSwitchProviderCode === ''
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
      newWorkEmail === '' ||
      newSidRegionCode === '' ||
      newSwitchPlatformCode === '' ||
      newSwitchProviderCode === ''
    ) {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
      setSubmitAndContinueFlag(false)
    } else {
      addNew()
      props.setToggleNewResounceModel(true)
      resetNew()
      setSubmitAndContinueFlag(true)
    }
  }

  const resetNew = () => {
    setNewWorkEmail('')
    setNewSidRegion('')
    setNewSidRegionCode('')
    setNewSwitchPlatform('')
    setNewSwitchPlatformCode('')
    setNewSwitchProvider('')
    setNewSwitchProviderCode('')
  }

  // const addGroupInAutocomplete = (grpId: number, grpName: String) => {
  //   const newGrp = {value: grpId, label: grpName}
  //   const a = [...resourceModelGroups, newGrp]
  //   console.log('a', a)
  // }
  return (
    <Modal
      show={props.toggleNewResounceModel}
      onHide={() => {
        trackEvent({
          Path: 'employee-switch-know-mapping-Lookup-modal',
          DomSelector: 'hide-modal-employee-switch-know-mapping-lookup-modal-button',
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
              Path: 'new-employee-switch-know-mapping-modal',
              DomSelector: 'submit-new-employee-switch-know-mapping-button',
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
              <th className='min-w-250px text-hover-primary'>Work Email</th>
              <th className='min-w-250px text-hover-primary'>Employee Name</th>
              <th className='min-w-250px text-hover-primary'>Team</th>
            </tr>
          </thead>
          <tbody>
            <tr key='modal-new-memeber0'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='fw-bold text-muted d-block fs-7'>
                      <Select
                        id='employeeData'
                        options={employeeData}
                        isLoading={!employeeData || employeeData.length === 0}
                        isSearchable={false}
                        isClearable={false}
                        escapeClearsValue={false}
                        styles={style}
                        onChange={(e: any) => {
                          pupoluateEmployeeInfo(e.value)
                        }}
                        placeholder='Select'
                        autoFocus
                        value={{
                          value: newWorkEmail,
                          label: newWorkEmail,
                        }}
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span
                      className={`fw-bold d-block fs-7 text-hover-primary ${
                        newWorkStatus === 'GONE' ? 'text-danger' : 'text-muted'
                      }`}
                    >
                      {newFullName || '--'}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span
                      className={`fw-bold d-block fs-7 text-hover-primary ${
                        newWorkStatus === 'GONE' ? 'text-danger' : 'text-muted'
                      }`}
                    >
                      {newTeam || '--'}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-150px text-hover-primary'>Work Status</th>
              <th className='min-w-150px text-hover-primary'>First Supervisor</th>
              <th className='min-w-150px text-hover-primary'>Legal Country</th>
            </tr>
            <tr key='modal-new-memeber1'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span
                      className={`fw-bold d-block fs-7 text-hover-primary ${
                        newWorkStatus === 'GONE' ? 'text-danger' : 'text-muted'
                      }`}
                    >
                      {newWorkStatus || '--'}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span
                      className={`fw-bold d-block fs-7 text-hover-primary ${
                        newWorkStatus === 'GONE' ? 'text-danger' : 'text-muted'
                      }`}
                    >
                      {newFirstSupervisorWorkEmail || '--'}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span
                      className={`fw-bold d-block fs-7 text-hover-primary ${
                        newWorkStatus === 'GONE' ? 'text-danger' : 'text-muted'
                      }`}
                    >
                      {newLegalCountry || '--'}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>Location</th>
              <th className='min-w-250px text-hover-primary'>SID Region</th>
              <th className='min-w-250px text-hover-primary'>ETL Date</th>
            </tr>
            <tr key='modal-new-memeber2'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span
                      className={`fw-bold d-block fs-7 text-hover-primary ${
                        newWorkStatus === 'GONE' ? 'text-danger' : 'text-muted'
                      }`}
                    >
                      {newCountry || '--'}
                    </span>
                  </div>
                </div>
              </td>
              <td className='text-start'>
                <div className='d-flex justify-content-start flex-column'>
                  <Select
                    id='sidRegionData'
                    options={sidRegionData}
                    isLoading={!sidRegionData || sidRegionData.length === 0}
                    isSearchable={false}
                    isClearable={false}
                    escapeClearsValue={false}
                    styles={style}
                    onChange={(e: any) => {
                      setNewSidRegion(e.label)
                      setNewSidRegionCode(e.value)
                    }}
                    placeholder='Select'
                    autoFocus
                    value={{
                      value: newSidRegionCode,
                      label: newSidRegion,
                    }}
                  />
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='fw-bold text-muted d-block fs-7 text-hover-primary'>
                      {getCurrentDateAndTime() || '--'}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>Switch Provider</th>
              <th className='min-w-150px text-hover-primary'>Switch Platform</th>
            </tr>
            <tr key='modal-new-memeber4'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='fw-bold text-muted d-block fs-7'>
                      <Select
                        id='switchProviderData'
                        options={switchProviderData}
                        isLoading={!switchProviderData || switchProviderData.length === 0}
                        isSearchable={false}
                        isClearable={false}
                        escapeClearsValue={false}
                        styles={style}
                        placeholder='Select'
                        autoFocus
                        onChange={(e: any) => {
                          setNewSwitchProvider(e.label)
                          setNewSwitchProviderCode(e.value)
                        }}
                        value={{
                          value: newSwitchProviderCode,
                          label: newSwitchProvider,
                        }}
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td className='text-start'>
                <div className='d-flex justify-content-start flex-column'>
                  <Select
                    id='switchPlatformData'
                    options={switchPlatformData}
                    isLoading={!switchPlatformData || switchPlatformData.length === 0}
                    isSearchable={false}
                    isClearable={false}
                    escapeClearsValue={false}
                    styles={style}
                    placeholder='Select'
                    autoFocus
                    onChange={(e: any) => {
                      setNewSwitchPlatform(e.label)
                      setNewSwitchPlatformCode(e.value)
                    }}
                    value={{
                      value: newSwitchPlatformCode,
                      label: newSwitchPlatform,
                    }}
                  />
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='fw-bold text-muted d-block fs-7 text-hover-primary'></span>
                  </div>
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
                        Path: 'new-employee-switch-know-mapping',
                        DomSelector: 'submit-new-employee-switch-know-mapping-button',
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
                        DomSelector: 'submit-new-employee-switch-know-mapping-button',
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

export {NewEmployeeSwitchKnowledgeLookup}
