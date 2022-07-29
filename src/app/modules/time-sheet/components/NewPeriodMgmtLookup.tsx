/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import { Modal } from 'react-bootstrap-v5'
import { useTracking } from 'react-tracking'
import { fetchPostMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import { toast } from 'react-toastify'
import { INewGeneralModalProps, periodLockStatusData } from '../../shared/Types/sharedITypes'
import Select from 'react-select'
import BasicDateRangePicker from '../../shared/DateRangePicker/BasicDateRangePicker'
import moment from 'moment'

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

const NewPeriodMgmtLookup: FC<INewGeneralModalProps> = (props) => {
  const { trackEvent } = useTracking()
  /*New Record*/
  const [periodStartDate, setPeriodStartDate] = useState('')
  const [periodEndDate, setPeriodEndDate] = useState('')
  const [lockStatus, setLockStatus] = useState(false)
  const [selectedOption, setSelectedOption] = useState(periodLockStatusData[0]);

  const addNewMember = () => {
    const requestObject = {
      PeriodStartDate: periodStartDate,
      PeriodEndDate: periodEndDate,
      LockStatus: lockStatus,
      IsActive: true
    }
      ; (async () => {
        await fetchPostMiddleWare(`TsPeriodMgmt/CreatePeriod`, requestObject)
          .then((response: any) => {
            if (response.isActive) {
              const refreshedData = [...props.Data, response]
              props.setData(refreshedData)
              toast.success('Data added successfully.')
            }
          })
          .catch((error: any) => {
            toast.error('Error happened. Please try again or check BI team.')
            console.error('Exception happened:CreatePeriod', error)
          })
      })()
  }

  /* Validation Duplicate*/
  const validateDuplicateOpenPeriodsForSameDateRange = (inputPeriodStartDate: Date, inputPeriodEndDate: Date) => {
    let counter = props.Data.filter((f: any) => f.periodStartDate === inputPeriodStartDate && f.periodEndDate === inputPeriodEndDate && f.lockStatus).length;
    if (counter > 0)
      return true
    else return false
  }

  const submitNew = (e: any) => {
    e.preventDefault()
    if (periodStartDate === '' || periodEndDate === '') {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
    }
    // else if (validateDuplicateOpenPeriodsForSameDateRange(periodStartDate, periodEndDate)) {
    //   toast.error(`A Period with selected date range already exist. It should be unique, please update your name`)
    // } 
    else {
      addNewMember()
      props.setToggleNewMemeber(false)
      resetDefault()
    }
  }

  const resetDefault = () => {
    setPeriodStartDate('')
    setPeriodEndDate('')
    setLockStatus(false)
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
          <span style={{ fontSize: '15px' }}>New Period</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className='table table-row-dashed table-row-gray-100 align-middle gs-0 gy-4'>
          <thead>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>Period</th>
              <th className='min-w-250px text-hover-primary'>Status for Team Member</th>
            </tr>
          </thead>
          <tbody>
            <tr key='modal-new-memeber-1'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2 text-muted fw-bold text-muted d-block fs-7'>
                    <BasicDateRangePicker setStartDate={(e: any) => {
                      setPeriodStartDate(moment(e).format('YYYY-MM-DD'))
                    }}
                      setEndDate={(e: any) => {
                        setPeriodEndDate(moment(e).format('YYYY-MM-DD'))
                      }} />
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
                        id='periodLockStatusData'
                        options={periodLockStatusData}
                        isLoading={!periodLockStatusData || periodLockStatusData.length === 0}
                        isSearchable={true}
                        isClearable={false}
                        styles={newSelectStyle}
                        placeholder='Period Lock Status'
                        value={selectedOption}
                        onChange={(e: any) => {
                          setSelectedOption(e)
                          setLockStatus(e.value)
                          trackEvent({
                            Path: '/ts-new-period/lookup',
                            DomSelector: 'ts-new-periods-select-input',
                          })
                        }}
                      />
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

export { NewPeriodMgmtLookup }
