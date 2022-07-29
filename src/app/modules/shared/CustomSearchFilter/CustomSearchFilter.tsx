import { FC, useState } from 'react'
import { Modal } from 'react-bootstrap-v5'
import { useTracking } from 'react-tracking'
import { ICustomSearchFilter, IGenericLookup, sortType } from '../../shared/Types/sharedITypes'
import { filterFunnel } from '../../../../setup/appConstants'
import CustomCheckboxlist from '../CustomChecboxList/CustomCheckboxlist'

const CustomSearchFilter: FC<ICustomSearchFilter> = (props) => {
  const { trackEvent } = useTracking()
  const [data, setData] = useState<IGenericLookup[]>([])

  const handleOK = (e: any) => {
    e.preventDefault()
    props.setToggleSearchFilter(false)
    props.setSearchFilter(props.filterId, data)
  }

  const handleSorting = (e: any, sortType: sortType) => {
    e.preventDefault()
    props.setSortOrder(sortType)
  }

  const handleCancel = (e: any) => {
    e.preventDefault()
    props.setToggleSearchFilter(false)
  }

  const setCheckboxData = (returnedData: IGenericLookup[]) => {
    setData(returnedData)
  }

  function handleClearFilters(e: any) {
    e.preventDefault()
    props.setSortOrder('')
    const resetData = props.data.map((item: any) => {
      return { value: item.value, label: item.label, checkStatus: false }
    })
    props.setSearchFilter(props.filterId, resetData)
  }

  return (
    <Modal
      scrollable={true}
      show={props.toggleSearchFilter}
      onHide={() => {
        trackEvent({
          Path: 'RegionsLookup',
          DomSelector: 'hide-modal-RegionsLookup-button',
        })
        props.setToggleSearchFilter(false)
      }}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      style={{ maxHeight: props.maxHeight || '720px', width: props.width || '450px', top: props.top, left: props.left }}
    >
      <Modal.Header className='py-3' closeButton={false}>
        <Modal.Title id='contained-modal-title-vcenter'>
          <span style={{ fontSize: '12px' }}>Filter: {props.filterId}</span>
        </Modal.Title>
        <button
          onClick={(e) => {
            trackEvent({
              Path: 'new-region-member-modal',
              DomSelector: 'submit-new-region-member-button',
            })
            props.setToggleSearchFilter(false)
          }}
          className='btn btn-sm btn-light-primary'
          type='submit'
        >
          Close
        </button>
      </Modal.Header>
      <Modal.Body className='py-1'>
        <div className='d-flex align-items-left flex-column'>
          <div className='w-100 py-2'>
            <div className='py-1'>
              <button
                className='btn btn-sm btn-icon btn-light-primary justify-content-start'
                style={{ width: '100%' }}
                onClick={(e: any) => {
                  handleSorting(e, 'ASC')
                  trackEvent({
                    Path: 'filter-sort-asc',
                    DomSelector: 'submit-filter-asc-sort-button',
                  })
                }}
              >
                <span className='svg-icon svg-icon-primary svg-icon-2x px-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24px'
                    height='24px'
                    viewBox='0 0 35 35'
                    version='1.1'
                  >
                    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                      <polygon points='0 0 24 0 24 24 0 24' />
                      <path
                        d='M8.2928955,10.2071068 C7.90237121,9.81658249 7.90237121,9.18341751 8.2928955,8.79289322 C8.6834198,8.40236893 9.31658478,8.40236893 9.70710907,8.79289322 L15.7071091,14.7928932 C16.085688,15.1714722 16.0989336,15.7810586 15.7371564,16.1757246 L10.2371564,22.1757246 C9.86396402,22.5828436 9.23139665,22.6103465 8.82427766,22.2371541 C8.41715867,21.8639617 8.38965574,21.2313944 8.76284815,20.8242754 L13.6158645,15.5300757 L8.2928955,10.2071068 Z'
                        fill='#000000'
                        fillRule='nonzero'
                        transform='translate(12.000003, 15.500003) scale(-1, 1) rotate(-90.000000) translate(-12.000003, -15.500003) '
                      />
                      <path
                        d='M6.70710678,12.2071104 C6.31658249,12.5976347 5.68341751,12.5976347 5.29289322,12.2071104 C4.90236893,11.8165861 4.90236893,11.1834211 5.29289322,10.7928968 L11.2928932,4.79289682 C11.6714722,4.41431789 12.2810586,4.40107226 12.6757246,4.76284946 L18.6757246,10.2628495 C19.0828436,10.6360419 19.1103465,11.2686092 18.7371541,11.6757282 C18.3639617,12.0828472 17.7313944,12.1103502 17.3242754,11.7371577 L12.0300757,6.88414142 L6.70710678,12.2071104 Z'
                        fill='#000000'
                        fillRule='nonzero'
                        opacity='0.3'
                        transform='translate(12.000003, 8.500003) scale(-1, 1) rotate(-360.000000) translate(-12.000003, -8.500003) '
                      />
                    </g>
                  </svg>
                </span>
                Sort A to Z
              </button>
            </div>
            <div className='py-1'>
              <button
                className='btn btn-sm btn-icon btn-light-primary justify-content-start'
                style={{ width: '100%' }}
                onClick={(e: any) => {
                  handleSorting(e, 'DSC')
                  trackEvent({
                    Path: 'filter-sort-dsc',
                    DomSelector: 'submit-filter-dsc-sort-button',
                  })
                }}
              >
                <span className='svg-icon svg-icon-primary svg-icon-2x px-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24px'
                    height='24px'
                    viewBox='0 0 35 35'
                    version='1.1'
                  >
                    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                      <polygon points='0 0 24 0 24 24 0 24' />
                      <path
                        d='M8.2928955,3.20710089 C7.90237121,2.8165766 7.90237121,2.18341162 8.2928955,1.79288733 C8.6834198,1.40236304 9.31658478,1.40236304 9.70710907,1.79288733 L15.7071091,7.79288733 C16.085688,8.17146626 16.0989336,8.7810527 15.7371564,9.17571874 L10.2371564,15.1757187 C9.86396402,15.5828377 9.23139665,15.6103407 8.82427766,15.2371482 C8.41715867,14.8639558 8.38965574,14.2313885 8.76284815,13.8242695 L13.6158645,8.53006986 L8.2928955,3.20710089 Z'
                        fill='#000000'
                        fillRule='nonzero'
                        transform='translate(12.000003, 8.499997) scale(-1, -1) rotate(-90.000000) translate(-12.000003, -8.499997) '
                      />
                      <path
                        d='M6.70710678,19.2071045 C6.31658249,19.5976288 5.68341751,19.5976288 5.29289322,19.2071045 C4.90236893,18.8165802 4.90236893,18.1834152 5.29289322,17.7928909 L11.2928932,11.7928909 C11.6714722,11.414312 12.2810586,11.4010664 12.6757246,11.7628436 L18.6757246,17.2628436 C19.0828436,17.636036 19.1103465,18.2686034 18.7371541,18.6757223 C18.3639617,19.0828413 17.7313944,19.1103443 17.3242754,18.7371519 L12.0300757,13.8841355 L6.70710678,19.2071045 Z'
                        fill='#000000'
                        fillRule='nonzero'
                        opacity='0.3'
                        transform='translate(12.000003, 15.499997) scale(-1, -1) rotate(-360.000000) translate(-12.000003, -15.499997) '
                      />
                    </g>
                  </svg>
                </span>
                Sort Z to A
              </button>
            </div>
            <div className='py-1'>
              <button
                className='btn btn-sm btn-icon btn-light-primary justify-content-start'
                style={{ width: '100%' }}
                onClick={(e: any) => {
                  handleClearFilters(e)
                  trackEvent({
                    Path: 'filter-clear',
                    DomSelector: 'submit-filter-clear-button',
                  })
                }}
              >
                <img
                  width={20}
                  height={20}
                  src={filterFunnel}
                  style={{ margin: '0px 9px' }}
                  alt='filter'
                />
                <span style={{ width: '10px', height: '10px', margin: '0 -17px' }}>❌</span>
                <span className='px-8'>Clear filter</span>
              </button>
            </div>
            <div className='separator mb-1'></div>
            <div>
              <CustomCheckboxlist
                checkboxListName={props.filterId}
                data={props.data}
                setData={(returnedData: IGenericLookup[]) => {
                  setCheckboxData(returnedData)
                }}
              />
            </div>
          </div>
          <div className='w-100 mb-4 d-flex justify-content-end'>
            <button
              className='btn btn-sm btn-light-primary px-8 me-4'
              type='submit'
              onClick={(e) => {
                handleOK(e)
                trackEvent({
                  Path: 'search-ok',
                  DomSelector: 'submit-search-ok-button',
                })
              }}
            >
              OK
            </button>
            <button
              className='btn btn-sm btn-light-primary'
              type='submit'
              onClick={(e) => {
                handleCancel(e)
                trackEvent({
                  Path: 'search-cancel',
                  DomSelector: 'submit-search-cancel-button',
                })
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default CustomSearchFilter
