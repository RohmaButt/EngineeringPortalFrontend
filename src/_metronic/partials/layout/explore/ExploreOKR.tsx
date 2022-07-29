/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { OKRToggle } from './OKRToggle'

export function ExploreOKR() {
  return (
    <>
      <OKRToggle />
      {/* begin::Exolore drawer */}
      <div
        id='kt_explore-okr'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='explore'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_explore_toggle-okr'
        data-kt-drawer-close='#kt_explore_close'
      >
        <div className='card shadow-none w-100'>
          <div className='card-body' id='kt_explore_body' style={{
            display: 'flex',
          }}>
            {/* begin::Content */}
            <div>
              <h4 className='fs-16 text-gray-700 w-bolder mb-6'>
                Definitions
              </h4>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">OKRs (Objectives and Key Results) are an agile leadership and goal management framework.</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">Objective is a desirable, ambitious goal, qualitatively describing an aspired outcome.</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">Objectives, also called goals, cascade from Portfolio level to service group and service level goals. Portfolio level goals are also called «Parent goals».</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">Goals are assigned to teams, not individuals to encourage team work.</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">Key Result is a measurable result indicating if you have achieved your Objective. Key Results have a starting and a target value.</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">Key Results can be defined on both parent goals and goals. </div>
              </div>


              <h4 className='fs-16 text-gray-700 w-bolder mb-6  mt-8'>
              Portal View: 
              </h4>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">In Portal Home Page, Objectives of your Portfolio/Service Group/Service are presented. </div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">For Key Results, progress and other details such as description, dependencies, risks please review OKR Project in Jira.</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">At Afiniti, OKR cycles Will be quarterly. You may view previous quarters OKRs by filtering from top menu. </div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">You may view objectives only assigned to your team via «Only My Objectives» selection on top menü. </div>
              </div>


              <h4 className='fs-16 text-gray-700 w-bolder mb-6  mt-8'>
              OKR Process: 
              </h4>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">Please contact your manager if you do not have objectives assigned to your team.</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">OKRs will be reviewed by managers monthly. Please track the progress of your OKRs in OKR Jira Project in order to reflect up to date status of OKRs in monthly reviews</div>
              </div>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <span className="bullet me-3"></span>
                <div className="text-gray-600 fw-bold fs-8">OKR is a live process. In case you have dependencies, obstacles or change in priorities during the cycle, you may ask your manager to revisit and review your OKR assignments. If your manager approves, your OKRs might be revised during the cycle. We expect this case to happen rare and stick to OKRs assigned beginning of cycle till end of the cycle. </div>
              </div>
            </div>
            {/* end::Content */}
          </div>
        </div>
      </div>
    </>
  )
}
