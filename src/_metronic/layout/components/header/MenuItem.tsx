import React from 'react'
// import {Link} from 'react-router-dom'
import { useLocation } from 'react-router'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import { checkIsActive, KTSVG } from '../../../helpers'
// NOTE: LINK IS REPLACED BY ANCHER TAG TO MAKE HYPERLINKS
import './styles/header-custom.scss'
type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  hasArrow?: boolean
  hasBullet?: boolean
}
const hoverTitles: any = {
  AIDI: 'Click for the all AIDI roles',
  Engineering: "Click for the all Engineering roles",
  Production: "In progress",
  Marketing: "Coming soon",
  Finance: "In progress",
  Global: "In progress",
  HR: "Coming soon",
  Communication: "Coming soon",
  Legal: "Coming soon",
  Revenue: "Coming soon",
}
const MenuItem: React.FC<Props> = ({
  to,
  title,
  icon,
  fontIcon,
  hasArrow = false,
  hasBullet = false,
}) => {
  const { pathname } = useLocation();
  const isDisabled = hoverTitles[title.split(" ")[0]] === "Coming soon" || hoverTitles[title.split(" ")[0]] === "In progress";
  return (
    <Tooltip title={hoverTitles[title.split(" ")[0]] || "Coming soon"} >
      <div className={`menu-item me-lg-1 ${isDisabled ? "cursor-not-allowed" : ''}`}>
        {/* //@ts-ignore */}
        <Link
          to={to}
          className={clsx(`menu-link ${isDisabled ? 'pointer-events-none' : ''}`, {
            active: checkIsActive(pathname, to),
          })}
        >
          {hasBullet && (
            <span className='menu-bullet'>
              <span className='bullet bullet-dot'></span>
            </span>
          )}

          {icon && (
            <span className='menu-icon'>
              <KTSVG path={icon} className='svg-icon-2' />
            </span>
          )}

          {fontIcon && (
            <span className='menu-icon'>
              <i className={clsx('bi fs-4', fontIcon)}></i>
            </span>
          )}

          <span className='menu-title fs-9 fw-bold'>{title}</span>

          {hasArrow && <span className='menu-arrow'></span>}
        </Link>
      </div>
    </Tooltip>
  )
}

export { MenuItem }
