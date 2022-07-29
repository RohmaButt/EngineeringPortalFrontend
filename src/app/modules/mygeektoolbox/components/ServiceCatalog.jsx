// import React from 'react'
import {useEffect, useState, useMemo} from 'react'
import './mygeektoolbox.css'
import axios from 'axios'
import {FeedbackButton} from '../../shared/FeedbackButton/FeedbackButton'
import {getToken, getUser} from '../../../../app/modules/auth/Common.ts'
import {ReactComponent as LoadingIcon} from '../../../../_metronic/assets/logos/loading.svg'
import DataTable from 'react-data-table-component'
import styled, {keyframes} from 'styled-components'
import {useTracking} from 'react-tracking'

// added badge for status
const Span = ({row}) => <span className={'badge badge-light-' + row.color}>{row.status}</span>

const StyledLoader = () => (
  <div style={{padding: '48px'}}>
    <div className='px-5 py-6'>
      <LoadingIcon width={30} height={30} />
    </div>
    <div>Loading...</div>
  </div>
)

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  &:hover {
    cursor: pointer;
  }
`
const FilterComponent = ({filterText, onFilter, onClear}) => (
  <>
    <TextField
      id='search'
      type='text'
      placeholder='Type to filter ...'
      aria-label='Search Input'
      value={filterText}
      onChange={onFilter}
    />
    <button
      className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
      onClick={onClear}
    >
      X
    </button>
  </>
)

const columns = [
  {
    name: 'Portfolio',
    selector: (row) => row.portfolio,
    sortable: true,
    width: '120px',
    wrap: true,
    // added link
    cell: (row) => (
      <a href={'https://support.afiniti.com/browse/SC-' + row.portfolio_no} target='_blank'>
        {row.portfolio}
      </a>
    ),
  },
  {
    name: 'Service Group',
    selector: (row) => row.service_group,
    sortable: true,
    width: '150px',
    wrap: true,
    // added link
    cell: (row) => (
      <a href={'https://support.afiniti.com/browse/SC-' + row.service_group_no} target='_blank'>
        {row.service_group}
      </a>
    ),
  },
  {
    name: 'Service',
    selector: (row) => row.service,
    sortable: true,
    width: '150px',
    wrap: true,
    cell: (row) => (
      <a href={'https://support.afiniti.com/browse/SC-' + row.service_no} target='_blank'>
        {row.service}
      </a>
    ),
  },
  {
    name: 'Status',
    selector: (row) => row.status,
    sortable: true,
    width: '100px',
    cell: (row) => <Span row={row} />,
  },
  {
    name: 'Description',
    selector: (row) => row.description,
    width: '600px',
    wrap: true,
    // slice description !! handle nulls
    format: (row) =>
      `${
        row.description === null
          ? ''
          : row.description.length >= 200
          ? row.description.slice(0, 200).concat('...')
          : row.description
      }`,
  },
  {
    name: 'Service Lead',
    selector: (row) => row.service_lead,
    width: '120px',
    wrap: true,
  },
  {
    name: 'Developers',
    selector: (row) => row.devs,
    width: '200px',
    wrap: true,
    // added badges !!! handle null or use li
    cell: (row) => (
      <div>
        {row.devs?.map((dev) => (
          <span className='badge badge-light'>{dev}</span>
        ))}
      </div>
    ),
  },
  {
    name: 'SDETs',
    selector: (row) => row.sdets,
    width: '120px',
    wrap: true,
    // added badges !!! handle null or use li
    cell: (row) => (
      <div>
        {row.sdets?.map((sdet) => (
          <span className='badge badge-light'>{sdet}</span>
        ))}
      </div>
    ),
  },
  {
    name: 'Technologies',
    selector: (row) => row.technology,
    width: '200px',
    wrap: true,
    // added badges
    cell: (row) => (
      <div>
        {row.technology?.map((tech) => (
          <span className='badge badge-light'>{tech.toUpperCase()}</span>
        ))}
      </div>
    ),
  },
  {
    name: 'Repo URLs',
    selector: (row) => row.repo,
    width: '300px',
    wrap: true,
    // hide
    omit: true,
  },
]

function Catalog() {
  const [data, setData] = useState([])
  const [pending, setPending] = useState(true)
  const {trackEvent} = useTracking()
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  const filteredData = data.filter(
    //item.portfolio &&
    (item) =>
      item.portfolio.toLowerCase().includes(filterText.toLowerCase()) ||
      item.service_group.toLowerCase().includes(filterText.toLowerCase()) ||
      item.service.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase()) ||
      item.service_lead?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.description?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.devs?.find((dev) => {
        return dev.toLowerCase().includes(filterText.toLowerCase())
      }) ||
      item.sdets?.find((sdet) => {
        return sdet.toLowerCase().includes(filterText.toLowerCase())
      }) ||
      item.technology?.find((tech) => {
        return tech.toLowerCase().includes(filterText.toLowerCase())
      }) ||
      item.repo?.toLowerCase().includes(filterText.toLowerCase())
  )

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        onFilter={(e) => {
          trackEvent({
            Path: '/my-toolbox/service-catalogue',
            DomSelector: 'filter-text',
          })
          setFilterText(e.target.value)
        }}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_MGT_API_URL
    axios.defaults.headers.common['portal-token-key'] = getToken()
    axios.defaults.headers.common['portal-user-name'] = getUser()
    axios.defaults.headers.get['Content-Type'] = 'application/json'
    axios.defaults.mode = 'cors'
    async function getServiceCatalog() {
      setPending(true)
      await axios
        .get(`MGT/GetServiceCatalog`, {})
        .then((res) => {
          setData(JSON.parse(res.data.json_data).data)
          setPending(false)
        })
        .catch(function (error) {
          console.error('GetServiceCatalog-E', error)
          setPending(false)
        })
    }
    getServiceCatalog()
  }, [])

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      },
    },
    header: {
      style: {
        borderRadius: 'inherit',
      },
    },
  }

  return (
    <>
      <div>
        <FeedbackButton
          link='https://forms.monday.com/forms/382954ddee7bbf3c33e46d685d4daaf6?r=use1'
          containerStyle={{
            position: 'absolute',
            right: '56px',
            top: '92px',
            zIndex: 9,
            opacity: 0.3,
          }}
        />
      </div>
      {/*pending && <div>
        <LoadingIcon width={24} height={24} />
      </div>*/}
      <div className='card mb-5 mb-xl-8'>
        <div className='service-catalog'>
          <DataTable
            title='Service Catalog'
            columns={columns}
            data={filteredData}
            // expandation not needed now
            // expandableRows
            // expandableRowExpanded={row => row.defaultExpanded}
            progressPending={pending}
            progressComponent={<StyledLoader />}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            ///expandableRowsComponent={ExpandedComponent}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
            customStyles={customStyles}
          />
        </div>
      </div>
    </>
  )
}

export default Catalog

/*
    type DataRow = {
      portfolio_no: string;
      service_group_no: string;
      service_no: string;
    
      portfolio: string;
      service_group: string;
      service: string;
    
      color: string;
      status: string;
      description: string;
    
      service_lead: string;
      devs: string;
      sdets: string;
    
      technology: string;
      repo: string;
    
    }; */
// const columns: TableColumn<DataRow>[] = [
