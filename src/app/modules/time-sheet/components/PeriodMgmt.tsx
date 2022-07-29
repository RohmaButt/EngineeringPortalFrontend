/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { KTSVG } from '../../../../_metronic/helpers'
import { PatchMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import 'react-toastify/dist/ReactToastify.css'
import { getCurrentDateAndTime } from '../../../../setup/appConstants'
import { useTracking } from 'react-tracking'
import Tooltip from '@mui/material/Tooltip'
import { IPeriod, periodLockStatusData } from '../../shared/Types/sharedITypes'
import { getAllPeriodDataFromDB } from '../../shared/Services/timeSheetService'
import moment from 'moment'
import EditableDDL from '../../shared/EditableDDL/EditableDDL'
import { NewPeriodMgmtLookup } from './NewPeriodMgmtLookup'
import { getUserName } from '../../auth/Common'

type Props = {
  className: string
}

const PeriodMgmt: React.FC<Props> = ({ className }) => {
  const [toggleNewMemeber, setToggleNewMemeber] = useState(false)
  const { trackEvent } = useTracking()
  const [lookupData, setLookupData] = useState<any[]>([])

  useEffect(() => {
    ; (async () => {
      await getAllPeriodDataFromDB()
        .then((response: any) => {
          if (response != null) {

            console.log('response', response)
            setLookupData(
              response.map((item: IPeriod) => {
                return {
                  id: item.id,
                  isActive: item.isActive,
                  periodStartDate: item.periodStartDate,
                  periodEndDate: item.periodEndDate,
                  lockStatus: item.lockStatus,
                  modifyDate: item.modifyDate,
                  modifyUser: item.modifyUser
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getAllPeriodDataFromDB', error)
        })
    })()
  }, [])

  function handlePatchRequest(newValue: any, id: number) {
    const requestObject = [
      {
        op: 'replace',
        value: newValue,
        path: '/lockStatus',
      },
      {
        op: 'replace',
        value: getUserName(),
        path: '/ModifyUser',
      },
      {
        op: 'replace',
        value: getCurrentDateAndTime(),
        path: '/modifyDate',
      },
    ]
      ; (async () => {
        await PatchMiddleWare(`TsPeriodMgmt/UpdatePeriod?id=${id}`, requestObject).then(
          (response: any) => {
            if (response.status === 200) {
              const cellText: any = lookupData.filter((x) => {
                return x.id === id
              })
              cellText[0].lockStatus = newValue
              cellText[0].modifyUser = getUserName()
              const refreshedData = [...lookupData]
              setLookupData(refreshedData)
              toast.success('Data updated successfully.')
            } else toast.error('Data updation failed.')
          }
        )
      })()
  }

  /* Validation Duplicate*/
  const validateDuplicateOpenPeriodsForSameDateRange = (inputPeriodStartDate: Date, inputPeriodEndDate: Date) => {
    let counter = lookupData.filter((f: any) => f.periodStartDate === inputPeriodStartDate && f.periodEndDate === inputPeriodEndDate && f.lockStatus).length;
    if (counter > 0)
      return true
    else return false
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Period Management</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{lookupData.length || 0} Period</span>
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
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />+ New Period
          </button>
        </div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px text-hover-primary'>Period</th>
                <th className='min-w-100px text-hover-primary'>Status for Team Member</th>
              </tr>
            </thead>
            <tbody>
              {lookupData
                .sort((a, b) => moment(b.periodStartDate).weeks() - moment(a.periodStartDate).weeks())
                .map((item: IPeriod) => {
                  return (
                    <tr key={item.id}>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {moment(item.periodStartDate).format('DD/MMM/YYYY')} -{moment(item.periodEndDate).format('DD/MMM/YYYY')}
                          </span>
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
                                {item.lockStatus ? 'Double click to edit' : 'Period is already locked'}
                              </span>
                            }
                            placement='top'
                          >
                            <div className='text-muted fw-bold d-block fs-7'>
                              <EditableDDL
                                doubleClick={true}
                                id='periodLockStatusData'
                                data={periodLockStatusData}
                                itemId={item.id}
                                isEnabled={!item.lockStatus}
                                selectedValue={item.lockStatus}
                                onChange={(e: any) => {
                                  handlePatchRequest(e, item.id)
                                  trackEvent({
                                    Path: 'new-period-mapping',
                                    DomSelector: 'new-period-mapping-status-input',
                                  })
                                }}
                              >
                                {periodLockStatusData.filter((f: any) => f.value === item.lockStatus)[0].label}
                              </EditableDDL>
                              {!item.lockStatus ?
                                (
                                  <div className='text-muted me-2 fs-7 fw-bold text-hover-danger'>
                                    "{item.modifyUser}" closed this period on {moment(item.modifyDate).format('DD/MMM/YYYY HH:MM:SS')}
                                  </div>
                                )
                                : ''}
                            </div>
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
      {
        toggleNewMemeber && (
          <NewPeriodMgmtLookup
            Data={lookupData}
            setData={(refreshedData: any[]) => {
              setLookupData(refreshedData)
            }}
            toggleNewMemeber={toggleNewMemeber}
            setToggleNewMemeber={(showStatus: boolean) => {
              setToggleNewMemeber(showStatus)
            }}
          />
        )
      }
    </div >
  )
}

export { PeriodMgmt }
