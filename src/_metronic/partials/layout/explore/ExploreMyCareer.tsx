import {MyCareerToggle} from './MyCareerToggle'

export function ExploreMyCareer() {
  return (
    <>
      <MyCareerToggle />
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
              <h4 className='fs-16 text-gray-700 w-bolder mb-6'>For more information</h4>
              <div className='d-flex align-items-center ps-10 mb-n1 mt-4'>
                <div className='text-gray-600 fw-bold fs-8'>
                  <ul>
                    <li>
                      After reviewing role profiles, you can ask your questions to the Global HR
                      team by using the Paycom Ask Here feature.
                      <div className='separator mb-6 opacity-5'></div>
                    </li>
                    <li>
                      You can review our internal job posting website for career opportunities in
                      different domains within Afiniti.
                      <div className='separator mb-1 opacity-5'></div>
                      <a href='https://internal-jobs.afiniti.com/' target='_blank'>https://internal-jobs.afiniti.com/</a>
                      <div className='separator mb-6 opacity-5'></div>
                    </li>
                    <li>
                      For any questions you may have, you can contact your manager or the Global HR
                      Strategy and Planning team via{' '}
                      <a href='mailto:engineeringOps@afiniti.com' className='px-1'>
                        afiniti.hrstrategyplanning@afiniti.com
                      </a>
                      .
                    </li>
                  </ul>
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
