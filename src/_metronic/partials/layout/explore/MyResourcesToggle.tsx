import  { FC } from 'react'
import './explore.scss';
const MyResourcesToggle: FC = () => (
  <button
    id='kt_explore_toggle_myresources'
    className='btn btn-sm btn-white btn-active-primary shadow-sm position-fixed px-5 fw-bolder zindex-2 mt-10 end-0 transform-90 fs-6 rounded-top-0 myresources-toggle'
    title={`Explore ${process.env.REACT_APP_THEME_NAME}`}
    data-bs-toggle='tooltip'
    data-bs-placement='right'
    data-bs-trigger='hover'
  >
    <span id='kt_explore_toggle_label_myresources'>My Resources</span>
  </button>
)

export { MyResourcesToggle }
