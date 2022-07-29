/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {useLayout} from '../../core'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {AsideMenu} from './AsideMenu'
import './aside-custom.scss'
import {UserContext} from '../../../../app/modules/context/UserContext'
import {getUserName} from '../../../../app/modules/auth/Common'
interface IUser {
  name: string
  title: string
  supervisor: string
  img: string
  catInfo: any[]
}
const AsideDefault: FC = () => {
  const {config, classes} = useLayout()
  const {impersonatedUser, componentRights}: any = React.useContext(UserContext)
  const [userInfo, setUserInfo] = useState<IUser>({
    name: '',
    title: '',
    supervisor: '',
    img: '',
    catInfo: [],
  })
  const {aside} = config
  const imgaes = getUserName()
  useEffect(() => {
    if (componentRights && componentRights.C_USER_CAT_INFO) {
      const fn = componentRights.C_USER_CAT_INFO.props.DISPLAY_NAME?.toLowerCase()
        .split('.')
        .map((i: any) => i.charAt(0).toUpperCase() + i.slice(1))

      const sfn = componentRights.C_USER_CAT_INFO.props.SUPERVISOR?.toLowerCase()
        .split('.')
        .map((i: any) => i.charAt(0).toUpperCase() + i.slice(1))
      setUserInfo({
        name: fn.toString().replace(',', ' '),
        title: componentRights.C_USER_CAT_INFO.props?.JOB_TITLE.split(',') || 'N/A',
        supervisor: sfn?.toString().replace(',', ' ') || 'N/A',
        img: process.env.PUBLIC_URL + `/profiles/${getUserName()}.jpg`,
        // catData: componentRights.C_USER_CAT_INFO.props.CATALOGUE_DATA,
        catInfo: componentRights.C_USER_CAT_INFO.props.DISPLAY_CATALOGUE_INFO,
      })
    }
  }, [componentRights, imgaes])
  return (
    <div
      id='kt_aside'
      className={clsx('aside', classes.aside.join(' '))}
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_aside_mobile_toggle'
    >
      {/* begin::Brand */}
      <div className='aside-logo flex-column-auto' id='kt_aside_logo'>
        {/* begin::Logo */}
        {aside.theme === 'dark' && (
          <>
            <Link to={componentRights?.LANDING_PAGE?.props?.LANDING_PAGE}>
              <img
                alt='Logo'
                className='h-50px logo'
                src={toAbsoluteUrl('/media/logos/Afiniti-Work-V3-01_Main_White.png')}
              />
            </Link>
            <sup style={{color: 'white', marginLeft: '-10px'}}>Beta</sup>
          </>
        )}
        {aside.theme === 'light' && (
          <>
            <Link to={componentRights?.LANDING_PAGE?.props?.LANDING_PAGE}>
              <img
                alt='Logo'
                className='h-25px logo'
                src={toAbsoluteUrl('/media/logos/Afiniti-Work-V3-02_Main_Black.png')}
              />
            </Link>
            <sup>Beta</sup>
          </>
        )}

        {/* end::Logo */}
        {/* begin::Aside toggler */}
        {/* end::Aside toggler */}
      </div>
      {/* end::Brand */}
      <div className='page d-flex flex-row flex-column-fluid user-header'>
        <div className='aside-toolbar flex-column-auto' id='kt_aside_toolbar'>
          <div className='aside-user d-flex  py-5' style={{maxWidth: '256px'}}>
            <div className='symbol symbol-50px'>
              <img
                src={
                  impersonatedUser?.props !== undefined
                    ? toAbsoluteUrl('/media/avatars/Robot_1.svg')
                    : userInfo?.img
                }
                alt=''
                onError={({currentTarget}) => {
                  currentTarget.onerror = null // prevents looping
                  currentTarget.src = toAbsoluteUrl('/media/avatars/Robot_1.svg')
                }}
                style={{objectFit: 'cover'}}
              />
            </div>
            <div className='aside-user-info flex-row-fluid flex-wrap ms-5'>
              <div className='d-flex'>
                <div className='flex-grow-1 me-2'>
                  <a href='#' className='text-white text-hover-primary fs-6 fw-bold'>
                    {userInfo?.name}
                  </a>
                  <span className='text-gray-600 fw-bold d-block fs-8'>{userInfo?.title[0]}</span>
                  <span className='text-gray-600 fw-bold d-block fs-8 mb-1'>
                    {userInfo?.title[1]}
                  </span>
                  <div className='d-flex align-items-center text-success fs-9'>
                    <span className='bullet bullet-dot bg-success me-1'></span>
                    {userInfo?.supervisor}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {userInfo?.catInfo &&
            userInfo.catInfo.map((c) => {
              return <span className='text-white d-block fs-9 mb-1'>{c}</span>
            })}
        </div>
      </div>
      {/* begin::Aside menu */}
      <div className='aside-menu flex-column-fluid'>
        <AsideMenu asideMenuCSSClasses={classes.asideMenu} />
      </div>
      {/* end::Aside menu */}

      {/* begin::Footer */}
      <div className='aside-footer flex-column-auto pt-5 pb-7 px-5' id='kt_aside_footer'>
        <a
          target='_blank'
          className='btn btn-custom btn-primary w-100'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL}
          data-bs-toggle='tooltip'
          data-bs-trigger='hover'
          data-bs-dismiss-='click'
          title='Check out the complete documentation with over 100 components'
        >
          <span className='btn-label'>Docs & Components</span>
          <span className='svg-icon btn-icon svg-icon-2'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' />
          </span>
        </a>
      </div>
      {/* end::Footer */}
    </div>
  )
}

export {AsideDefault}
