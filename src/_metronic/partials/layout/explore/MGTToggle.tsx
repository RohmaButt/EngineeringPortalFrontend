import React, { FC } from 'react'
import './explore.scss';
const MGTToggle: FC = () => (
  <button
    id='kt_explore_MGTtoggle'
    className='btn btn-sm btn-white btn-active-primary shadow-sm position-fixed px-5 fw-bolder zindex-2 mt-10 end-0 transform-90 fs-6 rounded-top-0 mgt-toggle'

    title={`Explore ${process.env.REACT_APP_THEME_NAME}`}
    data-bs-toggle='tooltip'
    data-bs-placement='right'
    data-bs-trigger='hover'
    style={{
      top: '85%'
    }}
  >
    <span id='kt_explore_toggle_label'>Geek Toolbox</span>
  </button>
)

export { MGTToggle }