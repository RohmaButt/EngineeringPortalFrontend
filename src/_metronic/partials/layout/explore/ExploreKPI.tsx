/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { toAbsoluteUrl } from '../../../helpers'
import { KPIToggle } from './KPIToggle'

export function ExploreKPI() {
  return (
    <>
      <KPIToggle />
      {/* begin::Exolore drawer */}
      <div
        id='kt_explore-kpi'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='explore'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_explore_toggle-kpi'
        data-kt-drawer-close='#kt_explore_close'
      >
        <div className='card shadow-none w-100'>
          <div className='card-body' id='kt_explore_body' style={{
            display: 'flex',
          }}>
            {/* begin::Content */}
            <div>
              <h4 className='fs-16 text-gray-700 w-bolder mb-6'>
                KPIs
              </h4>
              <p className='fs-8 text-gray-600 mb-1'>
                Engineering KPIs, also called Metrics, are Key Performance Indicator for Engineering teams.
              </p>
              <p className='fs-8 text-gray-600 mb-1'>
                Graphs show last 6 weeks moving averages.
              </p>
              <p className='fs-8 text-gray-600 mb-4'>
                Tables below show
              </p>
              <h4 className='fw-bold fs-5 text-gray-700 w-bolder pt-7'>
                KPI Formulations:
              </h4>
              <p className='fs-8 text-gray-600 mb-4'>
                Bugs per US:
              </p>
              <img
                alt=''
                style={{ objectFit: "cover", width:'105%'}}
                src={toAbsoluteUrl('/media/misc/bugs.PNG')}
                className='default'
              />
              <h4 className='fw-bold fs-5 text-gray-700 w-bolder pt-7'>
                Prod Bugs per US
              </h4>
              <p className='fs-8 text-gray-600 mb-4'>
                (Available for EBP & Shared Services)
              </p>
              <img
                alt=''
                style={{ objectFit: "cover", width:'115%'}}
                src={toAbsoluteUrl('/media/misc/prod-bugs.PNG')}
                className='default'
              />
              <div className='d-flex align-items-center ps-10 mb-n1'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">Calculated for Portfolio, Service Group, and Service separately.</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8"> For Divided, selected “Time Interval” filters “Creation Date”</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">For Divisor, selected “Time Interval” filters “Resolution Date”</div>
              </div>
              <h4 className='fw-bold fs-5 text-gray-700 w-bolder pt-7'>
                QA Leadtime
              </h4>
              <p className='fs-8 text-gray-600 mb-4'>
                (in days - Available for Mega)
              </p>
              <p className='fs-8 text-gray-600 mb-1'>
                AVERAGE TIME (RESOLUTION DATE - LAST DATE IN “WAITING FOR QA” STATUS) where
              </p>
              <p className='fs-8 text-gray-600 mb-1'>
                project in (AFCORE,IMEINT, Mega ACD,GENERAL,MEGAIVR) AND type in ("User Story","Story","Bug") AND status in (Done)
              </p>
              <div className='d-flex align-items-center ps-10 mb-n1'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-9">Calculated for Service. For the services under the same service group, average of Service QA leadtimes aggregate to Service Group QA lead time. Same for Service group to Portfolio.</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-9">Selected “Time Interval” filters “ResolutionDate”</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-9">For userstories/bugs with resolution date and last date in “Waiting for QA” status being the same day, the result will be reported as 0 (zero) QA Leadtime.</div>
              </div>
              <p className='d-flex align-item-center justify-content-end fs-9 text-gray-600 mt-10' >
                For more details please refer to the document «Afiniti - Engineering KPIs – v12»
              </p>

            </div>
            {/* end::Content */}
          </div>
        </div>
      </div>
    </>
  )
}
