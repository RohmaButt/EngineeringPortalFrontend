/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {MyResourcesToggle} from './MyResourcesToggle'

export function ExploreMyResources() {
  return (
    <>
      <MyResourcesToggle />
      {/* begin::Exolore drawer */}
      <div
        id='kt_explore-myresources'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='explore'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_explore_toggle_myresources'
        data-kt-drawer-close='#kt_explore_close'
      >
        <div className='card shadow-none w-100'>
          <div
            className='card-body'
            id='kt_explore_body'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* begin::Content */}
            <div>
              <h4 className='fs-16 text-gray-700 w-bolder mb-6'>Agile@ afiniti</h4>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <div className='text-gray-600 fw-bold fs-8'>
                  This article explains how our teams have adopted a new engineering rhythm. There
                  is a suggested two-week cycle as well as related meetings. This is our ultimate
                  goal in implementing to Afiniti.
                </div>
              </div>
              <h4 className='fs-16 text-gray-700 w-bolder mb-6  mt-8'>Sizing :</h4>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <div className='text-gray-600 fw-bold fs-8'>
                  This article shows how our teams size tickets for all types of items related to
                  products. Please note that Mega teams have begun to implement this approach, and
                  EBP and Shared Services teams will follow it soon.
                </div>
              </div>

              <h4 className='fs-16 text-gray-700 w-bolder mb-6  mt-8'>Roles in Action:</h4>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <div className='text-gray-600 fw-bold fs-8'>
                  This page explains the daily routines and their responsibilities of the following
                  roles. Please keep in mind that these may vary slightly based on the dynamics of
                  the team.
                </div>
              </div>

              <h4 className='fs-16 text-gray-700 w-bolder mb-6  mt-8'>Engineering principles:</h4>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <div className='text-gray-600 fw-bold fs-8'>
                  This article explains our six north stars, which must be followed and remembered
                  at all times by all Engineering teams.
                </div>
              </div>
            </div>
            {/* end::Content */}
          </div>
        </div>
      </div>
    </>
  )
}
