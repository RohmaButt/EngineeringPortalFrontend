/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../../modules/assets/myTeam/orgChart.scss'
import {getAvatarbase64, getUserProfile} from './chartHelper'

export default function EmployeeProfilePopup(props) {
  const {
    nodeId,
    userName,
    directReports,
    totalHeadcount,
    team,
    department,
    subDepartment,
    name,
    workEmail,
    positionName,
    legalEntity,
    firstSupervisorWorkEmail,
  } = props.employeeInfo

  const LineMgrName = firstSupervisorWorkEmail?.split('@')[0]

  return (
    <>
      <div
        id='popup'
        style={{border: 'solid 1px grey', width: '50rem', height: '14rem'}}
        className='card'
      >
        <div
          className='d-flex align-items-center flex-grow-2 flex-direction-row'
          style={{justifyContent: 'end'}}
        >
          <button
            type='submit'
            id='close'
            className='btn btn-sm text-hover-primary w-2 align-self-end'
          >
            X
          </button>
        </div>
        <div className='px-3 pt-1 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-0'>
            <div className='me-4 mb-2'>
              <div className='symbol symbol-100px symbol-lg-100px symbol-fixed position-relative'>
                <img
                  id='popupImg'
                  src={getUserProfile(userName)}
                  onError={() => getAvatarbase64()}
                  alt=''
                />
                <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
              </div>
            </div>
            <div className='flex-grow-1 flex-shrink-1 flex-basis-auto'>
              <div className='d-flex justify-content-between align-items-start mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-center tooltip-org'>
                    <div className='px-20 mx-20 tooltiptext-org'>
                      show his/her organization with double clicking here
                    </div>
                    <button
                      type='submit'
                      id={`popup_Btn_${nodeId}`}
                      className='btn btn-m text-gray-800 text-hover-primary fs-4 fw-bolder px-1 py-0'
                    >
                      {name}
                    </button>
                  </div>
                  <div className='d-flex flex-wrap fw-bold fs-9 pe-2'>
                    <a
                      href='#'
                      className='align-items-center text-gray-800 text-hover-primary me-5 mb-2'
                    >
                      <span className='svg-icon svg-icon-4 me-1'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='mh-50px'
                        >
                          <path
                            opacity='0.3'
                            d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z'
                            fill='black'
                          ></path>
                          <path
                            d='M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z'
                            fill='black'
                          ></path>
                        </svg>
                      </span>
                      {positionName}
                    </a>
                  </div>
                  <div className='d-flex flex-wrap fw-bold fs-9 pe-2'>
                    <a
                      href='#'
                      className='align-items-center text-gray-800 text-hover-primary mb-2'
                    >
                      <span className='svg-icon svg-icon-4 me-1'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='mh-50px'
                        >
                          <path
                            opacity='0.3'
                            d='M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z'
                            fill='black'
                          ></path>
                          <path
                            d='M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z'
                            fill='black'
                          ></path>
                        </svg>
                      </span>
                      {workEmail}
                    </a>
                  </div>
                  <div className='d-flex flex-wrap fw-bold fs-9 pe-2'>
                    <a
                      href='#'
                      className='align-items-center text-gray-800 text-hover-primary me-5 mb-2'
                    >
                      <span className='svg-icon svg-icon-4 me-1'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='mh-50px'
                        >
                          <path
                            opacity='0.3'
                            d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                            fill='black'
                          ></path>
                          <path
                            d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                            fill='black'
                          ></path>
                        </svg>
                      </span>
                      {legalEntity}
                    </a>
                  </div>
                  <div className='d-flex flex-wrap fw-bold fs-9 pe-2'>
                    <a
                      href='#'
                      className='align-items-center text-gray-800 text-hover-primary me-5 mb-2'
                    >
                      <span className='svg-icon svg-icon-4 me-1'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='mh-50px'
                        >
                          <path
                            opacity='0.3'
                            d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z'
                            fill='black'
                          ></path>
                          <path
                            d='M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z'
                            fill='black'
                          ></path>
                        </svg>
                      </span>
                      Reports to: {LineMgrName}
                    </a>
                  </div>
                </div>
                <div className='d-flex flex-column'>
                  <div className='pt-8'></div>
                  <div className='d-flex flex-wrap fw-bold fs-9 pe-2'>
                    <a
                      href='#'
                      className='align-items-center text-gray-800 text-hover-primary mb-2'
                    >
                      {team}
                    </a>
                  </div>
                  <div className='d-flex flex-wrap fw-bold fs-9 pe-2'>
                    <a
                      href='#'
                      className='align-items-center text-gray-800 text-hover-primary mb-2'
                    >
                      {subDepartment}
                    </a>
                  </div>
                  <div className='d-flex flex-wrap fw-bold fs-9 pe-2'>
                    <a
                      href='#'
                      className='align-items-center text-gray-800 text-hover-primary mb-2'
                    >
                      {department}
                    </a>
                  </div>
                </div>
                <div className='d-flex flex-column'>
                  <div className='d-flex flex-stack'>
                    <div className='d-flex flex-column flex-grow-1 pe-1'>
                      <div>
                        <div className='border border-gray-300 border-dashed rounded min-w-100px py-3 px-2 mb-2'>
                          <div className='d-flex align-items-center text-gray-800 text-hover-primary'>
                            <span className='svg-icon svg-icon-4 me-1'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  d='M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z'
                                  fill='black'
                                />
                                <rect
                                  opacity='0.3'
                                  x='8'
                                  y='3'
                                  width='8'
                                  height='8'
                                  rx='4'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            <div className='fs-8 fw-bolder'>{directReports}</div>
                          </div>
                          <div className='fw-bold fs-8 text-gray-800'>Direct Reports</div>
                        </div>
                        <div className='border border-gray-300 border-dashed rounded min-w-100px py-3 px-2 mb-2'>
                          <div className='d-flex align-items-center text-gray-800 text-hover-primary '>
                            <span className='svg-icon svg-icon-4 me-1'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  d='M16.0173 9H15.3945C14.2833 9 13.263 9.61425 12.7431 10.5963L12.154 11.7091C12.0645 11.8781 12.1072 12.0868 12.2559 12.2071L12.6402 12.5183C13.2631 13.0225 13.7556 13.6691 14.0764 14.4035L14.2321 14.7601C14.2957 14.9058 14.4396 15 14.5987 15H18.6747C19.7297 15 20.4057 13.8774 19.912 12.945L18.6686 10.5963C18.1487 9.61425 17.1285 9 16.0173 9Z'
                                  fill='black'
                                />
                                <rect
                                  opacity='0.3'
                                  x='14'
                                  y='4'
                                  width='4'
                                  height='4'
                                  rx='2'
                                  fill='black'
                                />
                                <path
                                  d='M4.65486 14.8559C5.40389 13.1224 7.11161 12 9 12C10.8884 12 12.5961 13.1224 13.3451 14.8559L14.793 18.2067C15.3636 19.5271 14.3955 21 12.9571 21H5.04292C3.60453 21 2.63644 19.5271 3.20698 18.2067L4.65486 14.8559Z'
                                  fill='black'
                                />
                                <rect
                                  opacity='0.3'
                                  x='6'
                                  y='5'
                                  width='6'
                                  height='6'
                                  rx='3'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            <div className='fs-8 fw-bolder'>{totalHeadcount}</div>
                          </div>
                          <div className='fw-bold fs-8 text-gray-800'>Span of control</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
