/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React from 'react'
// import { Link } from 'react-router-dom'
import {useLocation} from 'react-router'
import {UserContext} from '../../../../app/modules/context/UserContext'

import {KTSVG} from '../../../helpers'
import {useLayout} from '../../core'
import {Header} from './Header'
import {DefaultTitle} from './page-title/DefaultTitle'
import {Topbar} from './Topbar'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {userEmail, errorText}: any = React.useContext(UserContext)
  const {header, aside} = config
  const {pathname} = useLocation()
  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      {...attributes.headerMenu}
    >
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-center pl-4'
        )}
      >
        {/* begin::Aside mobile toggle */}
        {/* {aside.display && (
          <div className='d-flex align-items-center d-lg-none ms-n3 me-1' title='Show aside menu'>
            <div
              className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
              id='kt_aside_mobile_toggle'
            >
              <KTSVG path='/media/icons/duotune/abstract/abs015.svg' className='svg-icon-2x mt-1' />
            </div>
          </div>
        )} */}
        {/* end::Aside mobile toggle */}
        {/* begin::Logo */}
        {/* {!aside.display && (
          <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
            <Link to='/kpi' className='d-lg-none'>
              <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-2.svg')} className='h-30px' />
            </Link>
          </div>
        )} */}
        {/* end::Logo */}

        {/* {aside.display && (
          <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
            <Link to='/' className='d-lg-none'>
              <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-2.svg')} className='h-30px' />
            </Link>
          </div>
        )} */}

        {/* begin::Wrapper */}
        {(pathname === '/kpi' || pathname === '/my-career/career-framework') &&
        !userEmail &&
        !errorText ? (
          <div className='flex-parent feedback-text-see'>
            <span className='text-muted fs-9 flex-child long-and-truncated'>
              Engineering Portal Beta ready for your review. Please provide feedback on links
              provided or directly at{' '}
              <a href='mailto:engineeringOps@afiniti.com' className='px-1'>
                {' '}
                engineeringOps@afiniti.com
              </a>
              . All metrics & data are in progress so bear with us for any errors, we'll fix asap.
            </span>
          </div>
        ) : (
          <div className='flex-parent feedback-text-see'></div>
        )}

        <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
          {/* begin::Navbar */}
          {header.left === 'menu' && (
            <div className='d-flex align-items-stretch' id='kt_header_nav'>
              {(pathname === '/my-career/all-roles-engineering' ||
                pathname === '/my-career/all-roles-aidi') && <Header />}
            </div>
          )}
          {header.left === 'page-title' && (
            <div className='d-flex align-items-center' id='kt_header_nav'>
              <DefaultTitle />
            </div>
          )}
          <div className='d-flex align-items-stretch flex-shrink-0'>
            <Topbar />
          </div>
        </div>
      </div>
    </div>
  )
}
