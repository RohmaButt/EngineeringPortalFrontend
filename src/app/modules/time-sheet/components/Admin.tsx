/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ITimeSheetAdmin } from '../../shared/Types/sharedITypes'
import { GetAllWorklogsForAdmin } from '../../shared/Services/timeSheetService'
import moment from 'moment'
import _ from 'lodash'

type Props = {
  className: string
}

const Admin: React.FC<Props> = ({ className }) => {
  const [lookupData, setLookupData] = useState<any[]>([])

  useEffect(() => {
    ; (async () => {
      await GetAllWorklogsForAdmin()
        .then((response: any) => {
          if (response != null) {
            console.log('response', response)
            setLookupData(
              response.map((item: ITimeSheetAdmin) => {
                return {
                  employeeEmail: item.employeeEmail,
                  categoryName: item.categoryName,
                  typeName: item.typeName,
                  week1: item.week1,
                  week2: item.week2,
                  week3: item.week3,
                  week4: item.week4,
                  week5: item.week5
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:GetAllWorklogsForAdmin', error)
        })
    })()
  }, [])

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Admin</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{lookupData.length || 0} rows</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-2'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px text-hover-primary'>User</th>
                <th className='min-w-150px text-hover-primary'>Issue Category</th>
                <th className='min-w-150px text-hover-primary'>Type</th>
                <th className='min-w-100px text-hover-primary'>Week 1</th>
                <th className='min-w-100px text-hover-primary'>Week 2</th>
                <th className='min-w-100px text-hover-primary'>Week 3</th>
                <th className='min-w-100px text-hover-primary'>Week 4</th>
                <th className='min-w-100px text-hover-primary'>Week 5</th>

              </tr>
            </thead>
            <tbody>
              {lookupData
                .sort((a, b) => moment(b.periodStartDate).weeks() - moment(a.periodStartDate).weeks())
                .map((item: ITimeSheetAdmin) => {
                  return (
                    <tr key={_.uniqueId()}>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {item.employeeEmail}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {item.categoryName}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {item.typeName}
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {item.week1} %
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {item.week2} %
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {item.week3} %
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {item.week4} %
                          </span>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                            {item.week5} %
                          </span>
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
    </div >
  )
}

export { Admin }
