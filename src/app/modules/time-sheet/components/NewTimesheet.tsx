/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap-v5'
import { useTracking } from 'react-tracking'
import { fetchPostMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import { toast } from 'react-toastify'
import { defaultSelect, IGenericLookup, INewGeneralModalProps, ITimeSheetModalProps, periodLockStatusData } from '../../shared/Types/sharedITypes'
import Select from 'react-select'
import BasicDateRangePicker from '../../shared/DateRangePicker/BasicDateRangePicker'
import moment from 'moment'
import ReactDatePicker from '../../shared/DateRangePicker/ReactDatepicker'
import { getUserName } from '../../auth/Common'
import { GetHermesAccountsForJiraIssues, GetJiraIssueTypes } from '../../shared/Services/sharedAPIsService'

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

const NewTimesheet: FC<ITimeSheetModalProps> = (props) => {
  const { trackEvent } = useTracking()
  /*New Record*/
  const [jiraIssueCategories, setJiraIssueCategories] = useState<IGenericLookup[]>([defaultSelect, ...props.jiraCategoriesData]);
  const [jiraIssueTypes, setJiraIssueTypes] = useState<IGenericLookup[]>([]);
  const [issueTypeId, setIssueTypeId] = useState(0)
  const [issueCategoryId, setIssueCategoryId] = useState(0)
  const [week, setWeek] = useState(0)
  const [periodStartDate, setPeriodStartDate] = useState('')
  const [periodEndDate, setPeriodEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [loggedpercentage, setLoggedpercentage] = useState(0)


  useEffect(() => {
    ; (async () => {
      await GetJiraIssueTypes()
        .then((response: any) => {
          if (response != null) {
            console.log('GetJiraIssueTypes', response)
            setJiraIssueTypes(
              response.data.map((item: any) => {
                return {
                  value: item.id,
                  label: item.code + " " + item.name
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:GetJiraIssueTypes', error)
        })
      await GetHermesAccountsForJiraIssues()
        .then((response: any) => {
          if (response != null) {
            console.log('GetHermesAccountsForJiraIssues', response)
            setJiraIssueTypes(
              response.data.map((item: any) => {
                return {
                  value: item.id,
                  label: item.code + " " + item.name
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:GetJiraIssueCategories', error)
        })
    })()
  }, [])

  const addNewMember = () => {
    //const requestObject = {
    // "EmployeeEmail":"rohma.butt@afiniti.com",
    // "StartDate":"2022-02-17",  
    // "EndDate":"2022-02-21",  
    // "Week":"3",
    // "CategoryId":2,
    // "TypeId":5,
    // "LoggedHoursPercent":100,
    // "Description":"sick leave", 
    // "InsertionUser":"test",
    // "IsActive":true


    //   PeriodStartDate: periodStartDate,
    //   PeriodEndDate: periodEndDate,
    //   //   LockStatus: lockStatus,
    //   IsActive: true
    // }
    //   ; (async () => {
    //     await fetchPostMiddleWare(`TsPeriodMgmt/CreatePeriod`, requestObject)
    //       .then((response: any) => {
    //         if (response.isActive) {
    //           const refreshedData = [...props.Data, response]
    //           props.setData(refreshedData)
    //           toast.success('Data added successfully.')
    //         }
    //       })
    //       .catch((error: any) => {
    //         toast.error('Error happened. Please try again or check BI team.')
    //         console.error('Exception happened:CreatePeriod', error)
    //       })
    //   })()
  }

  /* Validation Duplicate*/
  const validateDuplicateOpenPeriodsForSameDateRange = (inputPeriodStartDate: Date, inputPeriodEndDate: Date) => {
    let counter = props.Data.filter((f: any) => f.periodStartDate === inputPeriodStartDate && f.periodEndDate === inputPeriodEndDate && f.lockStatus).length;
    if (counter > 0)
      return true
    else return false
  }

  const submitNew = (e: any) => {
    // e.preventDefault()
    // if (periodStartDate === '' || periodEndDate === '') {
    //   toast.error('Please give information to enter')
    //   console.error('Please give information to enter')
    // }
    // // else if (validateDuplicateOpenPeriodsForSameDateRange(periodStartDate, periodEndDate)) {
    // //   toast.error(`A Period with selected date range already exist. It should be unique, please update your name`)
    // // } 
    // else {
    //   addNewMember()
    //   props.setToggleNewMemeber(false)
    //   resetDefault()
    // }
  }

  const resetDefault = () => {
    // setPeriodStartDate('')
    // setPeriodEndDate('')
    // setLockStatus(false)
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
          <span style={{ fontSize: '15px' }}>New Timesheet</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className='table table-row-dashed table-row-gray-100 align-middle gs-0 gy-4'>
          <thead>
            <tr className='text-muted'>
              <th colSpan={2} className='min-w-250px text-hover-primary'>User <span className='fw-bolder text-muted text-hover-gray-800'>{getUserName()}</span></th>
            </tr>
          </thead>
          <tbody>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-100px text-hover-gray-800'>Issue</th>
              <th className='min-w-100px text-hover-gray-800'>
                <Select
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    CrossIcon: () => null,
                  }}
                  id='jiraCategory'
                  options={jiraIssueCategories}
                  isLoading={!jiraIssueCategories || jiraIssueCategories.length === 0}
                  isSearchable={true}
                  isClearable={false}
                  styles={newSelectStyle}
                  placeholder=''
                  // value={issueCategoryId}
                  onChange={(e: any) => {
                    console.log('e', e)
                    setIssueCategoryId(e.value)
                    trackEvent({
                      Path: '/ts-new-jira-cat/lookup',
                      DomSelector: 'ts-new-jira-cats-select-input',
                    })
                  }}
                />
              </th>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-100px text-hover-gray-800'>Week</th>
              <th className='min-w-100px text-hover-gray-800'>
                <ReactDatePicker
                // setStartDate={(e: any) => {
                //   console.log('setStartDate', e)
                //   setPeriodStartDate(moment(e).format('YYYY-MM-DD'))
                // }}
                // setEndDate={(e: any) => {
                //   console.log('setEndDate', e)
                //   setPeriodEndDate(moment(e).format('YYYY-MM-DD'))
                // }}
                // setWeek={(e: any) => {
                //   console.log('setEndDate', e)
                //   setWeek(moment(e).format('YYYY-MM-DD'))
                // }}
                />
              </th>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-100px text-hover-gray-800'>Worked</th>
              <th className='min-w-100px text-hover-gray-800'>
                <div className='d-flex flex-row fw-bold text-muted fs-7'>
                  <input
                    onChange={(e) => {
                      setLoggedpercentage(parseFloat(e.target.value))
                    }}
                    name='loggedpercentage'
                    className='form-control'
                    type="number"
                    placeholder=''
                    value={loggedpercentage}
                  />
                  <div style={{ paddingTop: '12px' }}>%</div>
                </div>
              </th>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-100px text-hover-gray-800'>Description</th>
              <th className='min-w-100px text-hover-gray-800'>
                <textarea aria-rowcount={5}
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                  value={description}
                  name='description'
                  className='form-control'
                // style={{ width: '100%', marginRight: '30px' }}
                />
              </th>
            </tr>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-100px text-hover-gray-800'>Type</th>
              <th className='min-w-100px text-hover-gray-800'>
                <Select
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    CrossIcon: () => null,
                  }}
                  id='jiraIssueType'
                  options={jiraIssueTypes}
                  isLoading={!jiraIssueTypes || jiraIssueTypes.length === 0}
                  isSearchable={true}
                  isClearable={false}
                  styles={newSelectStyle}
                  placeholder=''
                  value={jiraIssueTypes}
                  onChange={(e: any) => {
                    //     setLockStatus(e.value)
                    trackEvent({
                      Path: '/ts-new-issue-type/lookup',
                      DomSelector: 'ts-new-issue-types-select-input',
                    })
                  }}
                />
              </th>
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

export { NewTimesheet }
