/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import { Modal } from 'react-bootstrap-v5'
import { useTracking } from 'react-tracking'
import { fetchPostMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import { toast } from 'react-toastify'
import { INewGeneralModalProps } from '../../shared/Types/sharedITypes'

const NewRevenueBracketLookup: FC<INewGeneralModalProps> = (props) => {
  const { trackEvent } = useTracking()
  const [submitAndContinueFlag, setSubmitAndContinueFlag] = useState(false)

  /*New Record*/
  const [newBracketName, setNewBracketName] = useState('')
  const [newBracketMin, setNewBracketMin] = useState(0.00)
  const [newBracketMax, setNewBracketMax] = useState(0.00)

  /*Add records*/
  const addNewMember = () => {
    const requestObject = {
      name: newBracketName,
      Minimum: newBracketMin,
      Maximum: newBracketMax,
      IsActive: true,
    }
      ; (async () => {
        await fetchPostMiddleWare(`RmRevenueBrackets/CreateRevenueBracket`, requestObject)
          .then((response: any) => {
            if (response.isActive) {
              const refreshedData = [...props.Data, response]
              props.setData(refreshedData)
              toast.success('Data added successfully.')
            }
          })
          .catch((error: any) => {
            toast.error('Error happened. Please try again or check BI team.')
            console.error('Exception happened:CreateRevenueBracket', error)
          })
      })()
  }

  const validateDuplicateName = (inputValue: string) => {
    let counter = props.Data.filter((f: any) => f.name === inputValue).length;
    if (counter > 0)
      return true
    else return false
  }

  const submitNew = (e: any) => {
    e.preventDefault()
    if (newBracketName === '') {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
    } else if (validateDuplicateName(newBracketName)) {
      toast.error(`A Revenue bracket Name with "${newBracketName}" already exist. It should be unique, please update your name`)
    } else {
      addNewMember()
      props.setToggleNewMemeber(false)
      resetDefault()
    }
  }

  const resetDefault = () => {
    setNewBracketName('')
    setNewBracketMin(0.00)
    setNewBracketMax(0.00)
  }
  /*Add records*/
  return (
    <Modal
      show={props.toggleNewMemeber}
      onHide={() => {
        trackEvent({
          Path: 'NewBracketLookup',
          DomSelector: 'hide-modal-New-Bracket-button',
        })
        props.setToggleNewMemeber(false)
      }}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id='contained-modal-title-vcenter'>
          <span style={{ fontSize: '15px' }}>New Revenue Bracket</span>
        </Modal.Title>
        {submitAndContinueFlag && (
          <span
            className='fw-bolder text-hover-primary'
            style={{ fontSize: '15px', color: 'red', marginLeft: '150px' }}
          >
            Record added successfully, screen resetted for new entry
          </span>
        )}

      </Modal.Header>
      <Modal.Body>
        <table className='table table-row-dashed table-row-gray-100 align-middle gs-0 gy-4'>
          <thead>
            <tr className='fw-bolder text-muted'>
              <th className='min-w-250px text-hover-primary'>Revenue Bracket Name</th>
              <th className='min-w-250px text-hover-primary'>Minimum</th>
              <th className='min-w-250px text-hover-primary'>Maximum</th>
            </tr>
          </thead>
          <tbody>
            <tr key='modal-new-memeber'>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      <input
                        onChange={(e) => {
                          setNewBracketName(e.target.value)
                          setSubmitAndContinueFlag(false)
                        }}
                        name='newBracketName'
                        className='form-control'
                        placeholder=''
                        value={newBracketName}
                        style={{ width: '100%', marginRight: '30px' }}
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      <input
                        onChange={(e) => {
                          setNewBracketMin(parseFloat(e.target.value))
                          setSubmitAndContinueFlag(false)
                        }}
                        name='newBracketMin'
                        className='form-control'
                        type="number"
                        placeholder=''
                        value={newBracketMin}
                        style={{ width: '100%', marginRight: '30px' }}
                      />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                      <input
                        onChange={(e) => {
                          setNewBracketMax(parseFloat(e.target.value))
                          setSubmitAndContinueFlag(false)
                        }}
                        name='newBracketMax'
                        className='form-control'
                        type="number"
                        placeholder=''
                        value={newBracketMax}
                        style={{ width: '100%', marginRight: '30px' }}
                      />
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                {' '}
              </td>
              <td>
                {' '}
              </td>
              <td className='d-flex justify-content-end'>
                <button
                  onClick={(e) => {
                    trackEvent({
                      Path: 'new-bracket-member-modal',
                      DomSelector: 'submit-new-bracket-member-button',
                    })
                    props.setToggleNewMemeber(false)
                  }}
                  className='btn btn-sm btn-light-primary me-4'
                  type='submit'
                  style={{ marginTop: '14px', height: '40px', width: '80px' }}
                >
                  Cancel
                </button>
                <button
                  className='btn btn-bg btn-light-primary'
                  type='submit'
                  style={{ marginTop: '14px', height: '40px', width: '80px' }}
                  onClick={(e) => {
                    submitNew(e)
                    trackEvent({
                      Path: 'new-bracket-member',
                      DomSelector: 'submit-new-bracket-member-button',
                    })
                  }}
                >
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  )
}

export { NewRevenueBracketLookup }
