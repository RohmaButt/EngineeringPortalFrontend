/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Modal} from 'react-bootstrap-v5'
import {useTracking} from 'react-tracking'

const NewApprovalLineLookup: FC = (props) => {
  const {trackEvent} = useTracking()

  return (
    <Modal
      show={true}
      onHide={() => {
        trackEvent({
          Path: 'RegionsLookup',
          DomSelector: 'hide-modal-button',
        })
        // setToggleNewMemeber(false)
      }}
      style={{width: '90vw'}}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id='contained-modal-title-vcenter'>
          <span style={{fontSize: '15px'}}>Workflow for Approval</span>
        </Modal.Title>
        <button
          onClick={() => {
            trackEvent({
              Path: 'new-region-member-modal',
              DomSelector: 'submit-new-region-member-button',
            })
            // setToggleNewMemeber(false)
          }}
          className='btn btn-sm btn-light-primary'
          type='submit'
          style={{marginTop: '14px', height: '40px', width: '80px'}}
        >
          Close
        </button>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={(e) => {
            trackEvent({
              Path: 'new-region-member',
              DomSelector: 'submit-new-region-member-button',
            })
            // setImpersonate(e)
          }}
          // style={{display: 'flex', alignItems: 'end', justifyContent: 'space-between'}}
        >
          <table className='table table-row-dashed table-row-gray-100 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-250px text-hover-primary'>Regional Manager</th>
                <th className='min-w-150px text-hover-primary'>Workflow order</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <input
                        // onChange={(e) => setSidRegion(e.target.value)}
                        name='sidRegion'
                        className='form-control'
                        type='email'
                        pattern='.+@afiniti\.com'
                        placeholder='SID Region'
                        style={{width: '100%', marginRight: '30px'}}
                      />
                    </div>
                  </div>
                </td>
                <td className='text-start'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      <input
                        // onChange={(e) => setRegionManager(e.target.value)}
                        name='regionManager'
                        className='form-control'
                        type='email'
                        placeholder='Region Manager'
                        style={{width: '100%', marginRight: '30px'}}
                      />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='text-start'>
                  <button
                    className='btn btn-bg btn-light-primary'
                    type='submit'
                    style={{marginTop: '14px'}}
                  >
                    Submit and Add New
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-bg btn-light-primary'
                    type='submit'
                    style={{marginTop: '14px'}}
                  >
                    Submit {'>'}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export {NewApprovalLineLookup}
