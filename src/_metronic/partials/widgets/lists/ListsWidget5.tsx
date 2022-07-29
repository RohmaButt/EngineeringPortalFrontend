/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget5: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>     
      <div className='card-body pt-5'>
        <div className='timeline-label'>
        <div className='timeline-item'>
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-warning fs-1'></i>
            </div>
            <div className='fw-mormal timeline-content text-muted ps-3'>Software Engineer I</div>
          </div>
         <div className='timeline-item'>
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            <div className='fw-mormal timeline-content text-muted ps-3'>Software Engineer I</div>

          </div>
           <div className='timeline-item'>
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            <div className='fw-mormal timeline-content text-muted ps-3'>Software Engineer I</div>
          </div>
         <div className='timeline-item'>
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            <div className='fw-mormal timeline-content text-muted ps-3'>Software Engineer I</div>
          </div>   
        </div>
      </div>
    </div>
  )
}

export {ListsWidget5}
