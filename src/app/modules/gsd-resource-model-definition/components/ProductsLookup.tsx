/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { KTSVG } from '../../../../_metronic/helpers'
import { PatchMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import 'react-toastify/dist/ReactToastify.css'
import { getCurrentDateAndTime } from '../../../../setup/appConstants'
import EditableContainer from '../../shared/EditableContainer/EditableContainer'
import { useTracking } from 'react-tracking'
import { NewProductLookup } from './NewProductLookup'
import Tooltip from '@mui/material/Tooltip'
import { getResourceModelProductsFromDB } from '../../shared/Services/resourceModelDefinitionService'

type Props = {
  className: string
}

const ProductsLookup: React.FC<Props> = ({ className }) => {
  const [toggleNewMemeber, setToggleNewMemeber] = useState(false)
  const { trackEvent } = useTracking()
  const [productsData, setProductsData] = useState<any[]>([])
  useEffect(() => {
    ; (async () => {
      await getResourceModelProductsFromDB()
        .then((response: any) => {
          if (response != null) {
            setProductsData(
              response.map((item: any) => {
                return {
                  id: item.id,
                  name: item.name,
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getResourceModelProductsFromDB', error)
        })
    })()
  }, [])

  /*Patch Request*/
  function handlePatchRequest(newValue: any, id: number) {
    if (validateDuplicateName(newValue)) {
      toast.error(`A Product Name with "${newValue}" already exist. It should be unique, please update your name`)
    }
    else {
      const requestObject = [
        {
          op: 'replace',
          value: newValue,
          path: '/name',
        },
        {
          op: 'replace',
          value: getCurrentDateAndTime(),
          path: '/modifiedAt',
        },
      ]
        ; (async () => {
          await PatchMiddleWare(`RmProducts/UpdateProduct?id=${id}`, requestObject).then(
            (response: any) => {
              console.log('RmProducts/UpdateProduct', response)
              if (response.status === 200) {
                const cellText: any = productsData.filter((x) => {
                  return x.id === id
                })
                cellText[0].name = newValue
                console.log('cellText', cellText)
                const refreshedData = [...productsData]
                setProductsData(refreshedData)
                toast.success('Data updated successfully.')
              } else toast.error('Data updation failed.')
            }
          )
        })()
    }
  }
  /*Patch Request*/

  /* Validation Duplicate Name*/
  const validateDuplicateName = (inputValue: string) => {
    let counter = productsData.filter((f: any) => f.name === inputValue).length;
    if (counter > 0)
      return true
    else return false
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Products</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{productsData.length || 0} Products</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          <button
            className='btn btn-sm btn-light-primary me-4'
            onClick={() => {
              setToggleNewMemeber(true)
            }}
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />+ New
            Product
          </button>
        </div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px text-hover-primary'>Product Name</th>
                <th className='min-w-150px text-hover-primary'>Product ID</th>
              </tr>
            </thead>
            <tbody>
              {productsData
                .sort((a, b) => a.id - b.id)
                .map((productItem: any) => {
                  return (
                    <tr key={productItem.id}>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <Tooltip
                            title={
                              <span
                                style={{
                                  padding: '6px 6px',
                                  borderRadius: '6px',
                                }}
                              >
                                Double click to edit
                              </span>
                            }
                            placement='top'
                          >
                            <span className='text-muted fw-bold d-block fs-7'>
                              <EditableContainer
                                id='name'
                                doubleClick={true}
                                handleEnter={(e: any) => {
                                  handlePatchRequest(e, productItem.id)
                                }}
                                className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                              >
                                {productItem.name}
                              </EditableContainer>
                            </span>
                          </Tooltip>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7'>
                            {productItem.id}
                          </span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
      {toggleNewMemeber && (
        <NewProductLookup
          productsData={productsData}
          setProductsData={(refreshedRegioata: any[]) => {
            setProductsData(refreshedRegioata)
          }}
          toggleNewMemeber={toggleNewMemeber}
          setToggleNewMemeber={(showStatus: boolean) => {
            setToggleNewMemeber(showStatus)
          }}
        />
      )}
    </div>
  )
}

export { ProductsLookup }
