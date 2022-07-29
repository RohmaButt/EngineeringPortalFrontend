/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import { Modal } from 'react-bootstrap-v5'
import { useTracking } from 'react-tracking'
import Select from 'react-select'
import { fetchPostMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import { toast } from 'react-toastify'
import { INewRegionModalProps } from '../../shared/Types/sharedITypes'

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
const NewRegionLookup: FC<INewRegionModalProps> = (props) => {
  const { trackEvent } = useTracking()
  const [submitAndContinueFlag, setSubmitAndContinueFlag] = useState(false)

  /*New Record*/
  const [newSidRegionManager, setNewSidRegionManager] = useState('Select')
  const [newIsRegion, setNewIsRegion] = useState(true)
  const [newSidRegion, setNewSidRegion] = useState('')
  const [newDept, setNewDept] = useState('')
  const [newSubDept, setNewSubDept] = useState('')
  const [newTeam, setNewTeam] = useState('')

  /*Employee data*/
  const [users, setAllUsers] = useState(props.users)

  console.log('users', props.employeeData)
  /*Add records*/
  const addNewMember = () => {
    const requestObject = {
      name: newSidRegion,
      IsRegion: newIsRegion,
      RegionalManager: newSidRegionManager,
      IsImmutable: false,
      IsActive: true,
    }
      ; (async () => {
        await fetchPostMiddleWare(`SidRpRegions/CreateSidRpRegion`, requestObject)
          .then((response: any) => {
            if (response.isActive) {
              const refreshedData = [...props.regionsData, response]
              props.setRegionsData(refreshedData)
              toast.success('Data added successfully.')
            }
          })
          .catch((error: any) => {
            toast.error('Error happened. Please try again or check BI team.')
            console.error('Exception happened:addNewRegion', error)
          })
      })()
  }

  const validateRegionnName = (inputRegionName: string) => {
    let counter = props.regionsData.filter((f: any) => f.name === inputRegionName).length;
    if (counter > 0)
      return true
    else return false
  }

  const submitNewRegion = (e: any) => {
    e.preventDefault()
    if (newSidRegion === '') {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
    } else if (validateRegionnName(newSidRegion)) {
      toast.error(`A SID Region Name with "${newSidRegion}" already exist. SID Region Names should be unique, please update your name`)
    } else {
      addNewMember()
      props.setToggleNewMemeber(false)
      resetNewRegion()
    }
  }

  const resetNewRegion = () => {
    setNewSidRegionManager('')
    setNewIsRegion(true)
    setNewSidRegion('')
    setNewDept('')
    setNewSubDept('')
    setNewTeam('')
  }

  const setEmployeeData = (regionalMgr: string) => {
    setNewDept(props.employeeData.filter((x: any) => x.workEmail === regionalMgr)[0]?.department)
    setNewSubDept(props.employeeData.filter((x: any) => x.workEmail === regionalMgr)[0]?.subDepartment)
    setNewTeam(props.employeeData.filter((x: any) => x.workEmail === regionalMgr)[0]?.team)
  }
  /*Add records*/
  return (
    <Modal
      show={props.toggleNewMemeber}
      onHide={() => {
        trackEvent({
          Path: 'RegionsLookup',
          DomSelector: 'hide-modal-RegionsLookup-button',
        })
        props.setToggleNewMemeber(false)
      }}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id='contained-modal-title-vcenter'>
          <span style={{ fontSize: '15px' }}>New SID Region</span>
        </Modal.Title>
        {submitAndContinueFlag && (
          <span
            className='fw-bolder text-hover-primary'
            style={{ fontSize: '15px', color: 'red', marginLeft: '150px' }}
          >
            Record added successfully, screen resetted for new entry
          </span>
        )}

      </Modal.Header>
      <Modal.Body>
        <table className='table table-row-dashed table-row-gray-100 align-middle gs-0 gy-4'>
          <thead>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>SID Region</th>
              <th className='min-w-250px text-hover-primary'>SID Regional Manager</th>
            </tr>
          </thead>
          <tbody>
            <tr key='modal-new-memeber-0'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      <input
                        onChange={(e) => {
                          setNewSidRegion(e.target.value)
                          setSubmitAndContinueFlag(false)
                        }}
                        name='sidRegionNew'
                        className='form-control'
                        placeholder=''
                        value={newSidRegion}
                        style={{ width: '100%', marginRight: '30px' }}
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td colSpan={2} className='text-start'>
                <div className='d-flex justify-content-start flex-column'>
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
                      value: newSidRegionManager,
                      label: newSidRegionManager,
                    }}
                    onChange={(e: any) => {
                      setNewSidRegionManager(e.value)
                      setSubmitAndContinueFlag(false)
                      setEmployeeData(e.value)
                      trackEvent({
                        Path: '/sid-rp--new-regions/lookup',
                        DomSelector: 'sid-rp-regions-lookup-new-manager-select-input',
                      })
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>Department</th>
              <th className='min-w-250px text-hover-primary'>Sub Department</th>
              <th className='min-w-250px text-hover-primary'>Team</th>
            </tr>
            <tr key='modal-new-memeber-1'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      {newDept}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      {newSubDept}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      {newTeam}
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
                      Path: 'new-region-member-modal',
                      DomSelector: 'submit-new-region-member-button',
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
                    submitNewRegion(e)
                    trackEvent({
                      Path: 'new-region-member',
                      DomSelector: 'submit-new-region-member-button',
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
    </Modal>
  )
}

export { NewRegionLookup }
