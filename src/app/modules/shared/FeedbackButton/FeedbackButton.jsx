import React from 'react'
import { useLocation } from 'react-router-dom'
import {useTracking} from 'react-tracking'
import {ReactComponent as GroupedIcon} from '../../assets/img/icons/group.svg'
import './feedback.scss'

export const FeedbackButton = (props) => {
  const {pathname} = useLocation()
  const {containerStyle, link, size} = props;

  const {trackEvent} = useTracking()
  return (
    <div
      style={{
        ...containerStyle,
      }}
    >
      <button
        className='delivery-feedback'
        onClick={() => {
          trackEvent({
            Path: pathname,
            DomSelector: 'feedback-button',
          })
          window.open(link, '_blank')
        }}
        style={{
          marginLeft: '10px',
          width: size === 'small' ? '18px' : '24px',
          border: 'none',
          background: 'rgb(105, 153, 204)',
          display: 'flex',
          justifyContent: 'start',
          fontSize: size === 'small' ? '10px' : '12px',
          height: size === 'small' ? '18px' : '24px',
          color: 'white',
          padding: '4px',
          alignItems: 'center',
          borderRadius: '16px',
          paddingBottom: '0px',
        }}
      >
        <GroupedIcon
          style={{
            width: '18px',
            height: '18px',
            fill: 'white',
          }}
        />
        <span className='feedback-text' style={{marginLeft: '4px', marginBottom: '2px'}}>
          Give Feedback
        </span>
      </button>
    </div>
  )
}
