/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Toggle } from './Toggle'
import { Demos } from './Demos'
import { KTSVG } from '../../../helpers'

export function ExploreMain() {
  return (
    <>
      <Toggle />
      {/* begin::Exolore drawer */}
      <div
        id='kt_explore'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='explore'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_explore_toggle'
        data-kt-drawer-close='#kt_explore_close'
      >
        <div className='card shadow-none w-100'>
          <div className='card-body' id='kt_explore_body' style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
          }}>
            {/* begin::Content */}
            <div className='card-title fw-bold text-gray-600' style={{ fontSize: '26px' }}>
              My Desk Coming Soon
            </div>
            {/* end::Content */}
          </div>
        </div>
      </div>
    </>
  )
}
