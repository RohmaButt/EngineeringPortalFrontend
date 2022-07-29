import React from 'react'
import clsx from 'clsx'
import { useLocation } from 'react-router'
import { checkIsActive, KTSVG } from '../../../helpers'

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  hasBullet?: boolean
  muiIcon?: any
}

const AsideMenuItemInNewTab: React.FC<Props> = ({
  to,
  title,
  hasBullet = false,
  icon
}) => {
  const { pathname } = useLocation()
  const isActive = checkIsActive(pathname, to)

  return (
    <div className='menu-item'>
      <a className={clsx('menu-link without-sub', { active: isActive })} target="_blank" href={to} rel="noreferrer">
        {hasBullet && (
          <span className='menu-bullet'>
            <span className='bullet bullet-dot'></span>
          </span>
        )}
        {icon && (
          <span className='menu-icon'>
            <KTSVG path={icon} className='svg-icon-4' />
          </span>
        )}
        <span className='menu-title'>{title}</span>
      </a>
    </div>
  )
}

export { AsideMenuItemInNewTab }
