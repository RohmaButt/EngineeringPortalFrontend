/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { KTSVG } from '../../../../_metronic/helpers'
import { PatchMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import 'react-toastify/dist/ReactToastify.css'
import { getCurrentDateAndTime } from '../../../../setup/appConstants'
import EditableContainer from '../../shared/EditableContainer/EditableContainer'
import { useTracking } from 'react-tracking'
import Tooltip from '@mui/material/Tooltip'
import { getResourceModelRevenueBracketsFromDB } from '../../shared/Services/resourceModelDefinitionService'
import { NewRevenueBracketLookup } from './NewRevenueBracketLookup'

type Props = {
  className: string
}

const RevenueBracketsLookup: React.FC<Props> = ({ className }) => {
  const [toggleNewMemeber, setToggleNewMemeber] = useState(false)
  const { trackEvent } = useTracking()
  const [revenueBracketData, setRevenueBracketData] = useState<any[]>([])
  useEffect(() => {
    ; (async () => {
      await getResourceModelRevenueBracketsFromDB()
        .then((response: any) => {
          if (response != null) {
            setRevenueBracketData(
              response.map((item: any) => {
                return {
                  id: item.id,
                  name: item.name,
                  minimum: item.minimum,
                  maximum: item.maximum,
                }
              })
            )
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getResourceModelRevenueBracketsFromDB', error)
        })
    })()
  }, [])

  /*Patch Request*/
  function handlePatchRequest(newValue: any, id: number, patchType: string) {
    if (validateDuplicateName(newValue)) {
      toast.error(`A Revenue bracket Name with "${newValue}" already exist. It should be unique, please update your name`)
    }
    else {
      const requestObject = [
        {
          op: 'replace',
          value: newValue,
          path: '/' + patchType,
        },
        {
          op: 'replace',
          value: getCurrentDateAndTime(),
          path: '/modifiedAt',
        },
      ]
        ; (async () => {
          await PatchMiddleWare(`RmRevenueBrackets/UpdateRevenueBracket?id=${id}`, requestObject).then(
            (response: any) => {
              console.log('RmRevenueBrackets/UpdateRevenueBracket', response)
              if (response.status === 200) {
                const cellText: any = revenueBracketData.filter((x) => {
                  return x.id === id
                })
                switch (patchType) {
                  case 'name':
                    cellText[0].name = newValue
                    break;
                  case 'minimum':
                    cellText[0].minimum = newValue
                    break;
                  case 'maximum':
                    cellText[0].maximum = newValue
                    break;
                }
                console.log('cellText', cellText)
                const refreshedData = [...revenueBracketData]
                setRevenueBracketData(refreshedData)
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
    let counter = revenueBracketData.filter((f: any) => f.name === inputValue).length;
    if (counter > 0)
      return true
    else return false
  }

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Revenue Bracket</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{revenueBracketData.length || 0} Revenue Brackets</span>
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
            Revenue Bracket
          </button>
        </div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px text-hover-primary'>Revenue Bracket Name</th>
                <th className='min-w-150px text-hover-primary'>Revenue Bracket ID</th>
                <th className='min-w-150px text-hover-primary'>Minimum</th>
                <th className='min-w-150px text-hover-primary'>Maximum</th>
              </tr>
            </thead>
            <tbody>
              {revenueBracketData
                .sort((a, b) => a.id - b.id)
                .map((item: any) => {
                  return (
                    <tr key={item.id}>
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
                                  handlePatchRequest(e, item.id, 'name')
                                }}
                                className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                              >
                                {item.name}
                              </EditableContainer>
                            </span>
                          </Tooltip>
                        </div>
                      </td>
                      <td className='text-start'>
                        <div className='d-flex justify-content-start flex-column'>
                          <span className='text-muted fw-bold d-block fs-7'>
                            {item.id}
                          </span>
                        </div>
                      </td>
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
                                id='minimum'
                                type="number"
                                doubleClick={true}
                                handleEnter={(e: any) => {
                                  handlePatchRequest(e, item.id, 'minimum')
                                }}
                                className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                              >
                                {item.minimum}
                              </EditableContainer>
                            </span>
                          </Tooltip>
                        </div>
                      </td>
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
                                id='maximum'
                                doubleClick={true}
                                type="number"
                                handleEnter={(e: any) => {
                                  handlePatchRequest(e, item.id, 'maximum')
                                }}
                                className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
                              >
                                {item.maximum}
                              </EditableContainer>
                            </span>
                          </Tooltip>
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
        <NewRevenueBracketLookup
          Data={revenueBracketData}
          setData={(refreshedData: any[]) => {
            setRevenueBracketData(refreshedData)
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

export { RevenueBracketsLookup }
