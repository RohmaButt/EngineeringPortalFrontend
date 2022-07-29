/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import { Modal } from 'react-bootstrap-v5'
import { useTracking } from 'react-tracking'
import { fetchPostMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import { toast } from 'react-toastify'
import { INewProductModalProps } from '../../shared/Types/sharedITypes'

const newSelectStyle = {
  control: (base: any) => ({
    ...base,
    '&:hover': {
      color: 'black',
    },
    border: '1px solid #e4e6ef',
    boxShadow: 'none',
    borderRadius: '0.475rem',
    height: '100%',
    fontSize: '1.1rem',
    fontWeight: '500',
    lineHeight: '1.5',
    color: '#181c32',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    '&:hover': {
      color: 'inherit',
    },
    height: '100%',
    color: '#a1a5b7',
  }),
}
const NewProductLookup: FC<INewProductModalProps> = (props) => {
  const { trackEvent } = useTracking()
  const [submitAndContinueFlag, setSubmitAndContinueFlag] = useState(false)

  /*New Record*/
  const [newProductName, setNewProductName] = useState('')

  /*Add records*/
  const addNewMember = () => {
    const requestObject = {
      name: newProductName,
      IsActive: true,
    }
      ; (async () => {
        await fetchPostMiddleWare(`RmProducts/CreateProduct`, requestObject)
          .then((response: any) => {
            if (response.isActive) {
              const refreshedData = [...props.productsData, response]
              props.setProductsData(refreshedData)
              toast.success('Data added successfully.')
            }
          })
          .catch((error: any) => {
            toast.error('Error happened. Please try again or check BI team.')
            console.error('Exception happened:CreateProduct', error)
          })
      })()
  }

  const validateDuplicateName = (inputValue: string) => {
    let counter = props.productsData.filter((f: any) => f.name === inputValue).length;
    if (counter > 0)
      return true
    else return false
  }

  const submitNewRegion = (e: any) => {
    e.preventDefault()
    if (newProductName === '') {
      toast.error('Please give information to enter')
      console.error('Please give information to enter')
    } else if (validateDuplicateName(newProductName)) {
      toast.error(`A Product Name with "${newProductName}" already exist. It should be unique, please update your name`)
    } else {
      addNewMember()
      props.setToggleNewMemeber(false)
      resetDefault()
    }
  }

  const resetDefault = () => {
    setNewProductName('')
  }
  /*Add records*/
  return (
    <Modal
      show={props.toggleNewMemeber}
      onHide={() => {
        trackEvent({
          Path: 'NewProductLookup',
          DomSelector: 'hide-modal-New-Product-button',
        })
        props.setToggleNewMemeber(false)
      }}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id='contained-modal-title-vcenter'>
          <span style={{ fontSize: '15px' }}>New Product</span>
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
              <th className='min-w-250px text-hover-primary'>Product Name</th>
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
                          setNewProductName(e.target.value)
                          setSubmitAndContinueFlag(false)
                        }}
                        name='newProductName'
                        className='form-control'
                        placeholder=''
                        value={newProductName}
                        style={{ width: '100%', marginRight: '30px' }}
                      />
                    </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className='d-flex justify-content-end'>
                <button
                  onClick={(e) => {
                    trackEvent({
                      Path: 'new-product-member-modal',
                      DomSelector: 'submit-new-product-member-button',
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
                    submitNewRegion(e)
                    trackEvent({
                      Path: 'new-product-member',
                      DomSelector: 'submit-new-product-member-button',
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

export { NewProductLookup }
