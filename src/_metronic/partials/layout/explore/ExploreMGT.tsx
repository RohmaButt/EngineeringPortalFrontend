/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { MGTToggle } from './MGTToggle'

export function ExploreMGT() {
  return (
    <>
      <MGTToggle />
      {/* begin::Explore drawer */}
      <div
        id='kt_explore_MGTtoggle'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='explore'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_explore_MGTtoggle'
        data-kt-drawer-close='#kt_explore_MGTtoggle_close'
      >
        <div className='card shadow-none w-100'>
          <div className='card-body' id='kt_explore_body' style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
          }}>
            {/* begin::Content */}
            <div className='card-title fw-bold text-gray-600' >
              <h3 className='card-title align-items-start flex-column text-gray-600'>API Portal</h3>
              <ul>
                <li>Lists all exposed APIs by portfolios </li>
                <li>Includes parameters, request/response examples, error codes etc.</li>
                <li>Datasource: Bitbucket</li>
              </ul>
              <h3 className='card-title align-items-start flex-column text-gray-600'>Relationships</h3>
              <ul>
                <li>Show relationships between services</li>
                <li>Datasource: Service Catalog relationships in Jira</li>
              </ul>
              <h3 className='card-title align-items-start flex-column text-gray-600'>Service Catalog</h3>
              <ul>
                <li>Lists all attributes for services in catalog</li>
                <li>Datasource: Service Catalog in Jira</li>
              </ul>
              <h3 className='card-title align-items-start flex-column text-gray-600'>Enterprise Architecture Board</h3>
              <ul>
                <li>Detailed information about EA Board and its outcomes</li>
              </ul>
            </div>
            {/* end::Content */}
          </div>
        </div>
      </div>
    </>
  )
}
