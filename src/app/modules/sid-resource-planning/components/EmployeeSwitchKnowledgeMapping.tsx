/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTracking } from 'react-tracking'
import { getEmployeesSwitchKnowledgeMappingFromDB, GetSwitchPlatformsKnowledgeHeader } from '../../shared/Services/sharedAPIsService'
import {
  checkboxListType,
  defaultCheckbox,
  IGenericLookup,
  IEmployeeSwitchKnowledge,
  sortType,
  ISwitchKnowledgePlatforms,
  ISwitchKnowledgePlatformsProvidersFlat,
  defaultPlatform,
  ISelectookup,
  defaultRoleWithValue,
} from '../../shared/Types/sharedITypes'
import { fetchPostMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import CustomSearchFilter from '../../shared/CustomSearchFilter/CustomSearchFilter'
import _ from 'lodash'
import Tooltip from '@mui/material/Tooltip'
import EditableHorizontalCheckboxList from '../../shared/EditableHorizontalCheckboxList/EditableHorizontalCheckboxList'
import Select from 'react-select'

type Props = {
  className: string
}


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
    color: '#181c32'
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

const EmployeeSwitchKnowledgeMapping: React.FC<Props> = ({ className }) => {
  const ulBorderRef = React.useRef() as React.MutableRefObject<HTMLUListElement | null>;

  const [switchPlatformsData, setSwitchPlatformData] = useState<ISwitchKnowledgePlatforms[]>([])
  const [switchPlatformsDataFlat, setSwitchPlatformDataFlat] = useState<ISwitchKnowledgePlatformsProvidersFlat[]>([])
  const { trackEvent } = useTracking()
  const [sidMappingData, setSidMappingData] = useState<IEmployeeSwitchKnowledge[]>([])
  const [sidMappingDataCloned, setSidMappingDataCloned] = useState<IEmployeeSwitchKnowledge[]>([])

  const [selectedSwitchPlatformId, setSelectedSwitchPlatformId] = useState(defaultRoleWithValue.value)
  const [selectedSwitchPlatformName, setSelectedSwitchPlatformName] = useState(defaultRoleWithValue.label)

  const [selectedSwitchProviderId, setSelectedSwitchProviderId] = useState(defaultRoleWithValue.value)
  const [selectedSwitchProviderName, setSelectedSwitchProviderName] = useState(defaultRoleWithValue.label)

  const [noSwitchKnowledgeChecked, setNoSwitchKnowledgeChecked] = useState(false)

  const [checkboxDataForName, setCheckboxDataForName] = useState<IGenericLookup[]>([])
  const [checkboxDataForEmail, setCheckboxDataForEmail] = useState<IGenericLookup[]>([])

  const [checkboxCheckedCountForName, setCheckboxCheckedCountForName] = useState(false)
  const [checkboxCheckedCountForEmail, setCheckboxCheckedCountForEmail] = useState(false)

  const [toggleSearchFilterForName, setToggleSearchFilterForName] = useState(false)
  const [toggleSearchFilterForEmail, setToggleSearchFilterForEmail] = useState(false)

  const [toggleSortForName, setToggleSortForName] = useState('')
  const [toggleSortForEmail, setToggleSortForEmail] = useState('')

  useEffect(() => {
    ; (async () => {
      await getEmployeesSwitchKnowledgeMappingFromDB()
        .then((response: any) => {
          if (response !== null) {
            setSidMappingData(response)
            setSidMappingDataCloned(response)
          }
        })
        .catch(function (error) {
          if (error) {
            toast.error('Something went wrong. Please reload page or contact BI team')
            console.error('error:getEmployeesRegionMappingFromDB', error)
          }
        })

      await GetSwitchPlatformsKnowledgeHeader()
        .then((response: any) => {
          if (response !== null) {
            var flatData = response.map((item: ISwitchKnowledgePlatforms) =>
              item.switchPlatforms.map((child: IGenericLookup) => ({ parentId: item.switchProviderId, parentName: item.switchProviderName, ...child }))
            ).flat();
            setSwitchPlatformDataFlat(flatData)
            setSwitchPlatformData(response)
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:GetSwitchPlatformsKnowledgeHeader', error)
        })
    })()
  }, [])

  function handlePatchRequest(patchedItem: any) {
    const requestObject = {
      SwitchPlatformId: patchedItem[0]?.value,
      EmployeeEmail: patchedItem[0]?.associatedType,
      IsActive: patchedItem[0]?.checkStatus
    }
      ; (async () => {
        await fetchPostMiddleWare(
          `EmployeeSwitchKnowledge/AddOrUpdateEmployeeSwitchKnowledge`,
          requestObject
        ).then((response: any) => {
          if (response.employeeEmail === patchedItem[0]?.associatedType) {
            const updatingRecord: any = sidMappingData.filter((x: any) => {
              return x.employeeEmail === patchedItem[0]?.associatedType
            })
            console.log('updatingRecord', updatingRecord[0])

            if (updatingRecord[0].switchPlatforms.filter((a: IGenericLookup) => a.value === patchedItem[0]?.value).length !== 0) {
              updatingRecord[0].switchPlatforms.filter((a: IGenericLookup) => a.value === patchedItem[0]?.value)[0].checkStatus = patchedItem[0]?.checkStatus
            }
            else {
              const newObject = {
                value: patchedItem[0]?.value,
                label: patchedItem[0]?.label,
                checkStatus: patchedItem[0]?.checkStatus
              }
              updatingRecord[0].switchPlatforms.filter((x: IGenericLookup) => x.value === defaultPlatform.value && x.label === defaultPlatform.label).pop() // remove default
              updatingRecord[0].switchPlatforms.push(newObject)
            }
            console.log('updatingRecord[0]', updatingRecord[0])
            const refreshedData = [...sidMappingData]
            setSidMappingData(refreshedData)
            toast.success('Data updated successfully.')
          } else toast.error('Data updation failed.')
        })
      })()
  }

  useEffect(() => {
    function reloadFilterationOnData(): void {
      let filteringDataValuesForName: any[] = []
      let filteringDataValuesForEmail: any[] = []

      filteringDataValuesForName = checkboxDataForName
        .filter((f: IGenericLookup) => f.checkStatus === true)
        .map((b: IGenericLookup) => b.value)
      if (filteringDataValuesForName.length > 0) setCheckboxCheckedCountForName(true)
      else setCheckboxCheckedCountForName(false)

      filteringDataValuesForEmail = checkboxDataForEmail
        .filter((f: IGenericLookup) => f.checkStatus === true)
        .map((b: IGenericLookup) => b.value)
      if (filteringDataValuesForEmail.length > 0) setCheckboxCheckedCountForEmail(true)
      else setCheckboxCheckedCountForEmail(false)

      /////APPLY FILTERATION/////
      let filteredData: IEmployeeSwitchKnowledge[] = sidMappingDataCloned
      if (filteringDataValuesForName.length > 0) {
        filteredData = filteredData.filter((f: IEmployeeSwitchKnowledge) =>
          filteringDataValuesForName.includes(f.employeeName)
        )
      }
      if (filteringDataValuesForEmail.length > 0) {
        filteredData = filteredData.filter((f: IEmployeeSwitchKnowledge) =>
          filteringDataValuesForEmail.includes(f.employeeEmail)
        )
      }
      if (selectedSwitchProviderId !== defaultRoleWithValue.value) {
        filteredData = filteredData.filter((f: any) => f.switchPlatforms.length > 0 &&
          f.switchPlatforms.filter((x: any) => x.checkStatus === true && x.parent === selectedSwitchProviderId).length)
      }
      if (selectedSwitchPlatformId !== defaultRoleWithValue.value) {
        filteredData = filteredData.filter((f: any) => f.switchPlatforms.length > 0 &&
          f.switchPlatforms.filter((x: any) => x.checkStatus === true && x.parent === selectedSwitchProviderId && x.value === selectedSwitchPlatformId).length)
      }
      if (noSwitchKnowledgeChecked) {
        const defaultAssignedData = sidMappingData.filter((f: any) =>
          f.switchPlatforms.filter((x: any) => x.checkStatus === false && x.label === defaultPlatform.label).length)
        const nondefaultAssignedData = sidMappingData.filter((f: any) =>
          f.switchPlatforms.length === f.switchPlatforms.filter((x: any) => x.checkStatus === false && x.label !== defaultPlatform.label).length)
        filteredData = [...defaultAssignedData, ...nondefaultAssignedData]
      }
      // if (filteredData.length > 0) {
      setSidMappingData(filteredData)
      // } else {
      //   setSidMappingData(sidMappingDataCloned)
      // }
    }
    reloadFilterationOnData()
  }, [checkboxDataForName, checkboxDataForEmail, selectedSwitchPlatformId, selectedSwitchProviderId, noSwitchKnowledgeChecked, sidMappingDataCloned])


  function setAllSortingsOnDataTable(columnType: checkboxListType, sortOrder: sortType) {
    switch (columnType) {
      case 'Employee Name':
        setToggleSortForName(sortOrder)
        sidMappingData.sort(function (a, b) {
          return sortOrder === 'ASC'
            ? a.employeeName.localeCompare(b.employeeName)
            : b.employeeName.localeCompare(a.employeeName)
        })
        break
      case 'Employee Email':
        setToggleSortForEmail(sortOrder)
        sidMappingData.sort(function (a, b) {
          return sortOrder === 'ASC'
            ? a.employeeEmail.localeCompare(b.employeeEmail)
            : b.employeeEmail.localeCompare(a.employeeEmail)
        })
        break
    }
  }

  const getAssignedPlatformsCount = () => {
    const defaultAssignedCount = sidMappingData.filter((f: any) =>
      f.switchPlatforms.filter((x: any) => x.checkStatus === false && x.label === defaultPlatform.label).length).length
    const nondefaultAssignedCount = sidMappingData.filter((f: any) =>
      f.switchPlatforms.length === f.switchPlatforms.filter((x: any) => x.checkStatus === false && x.label !== defaultPlatform.label).length).length
    return defaultAssignedCount + nondefaultAssignedCount
  }

  const getSelectedProviders = () => {
    if (selectedSwitchProviderId > 0 && selectedSwitchProviderId !== defaultRoleWithValue.value) {
      let filtered = switchPlatformsData?.filter((f: ISwitchKnowledgePlatforms) => f.switchProviderId === selectedSwitchProviderId)
      return ([defaultRoleWithValue, ...filtered[0]?.switchPlatforms.map((ele: ISelectookup) => { return { value: ele.value, label: ele.label } })])
    }
    else return ([defaultRoleWithValue])
  }
  return (
    <div className={`card ${className} `}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>SID-Employee Switch Knowledge</span>
          <span className='text-muted mt-1 fw-bold fs-7'>
            {getAssignedPlatformsCount() || 0} Employees with no Switch Platform knowledge assigned. Please update.</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-100 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-250px text-hover-primary'>Show employees with Platform Knowledge</th>
                <th className='min-w-250px text-hover-primary'>Show employees with Switch Provider</th>
                <th className='min-w-250px text-hover-primary'>Show only employees with no Switch Knowledge assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr key='filter-row-0'>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        <Select
                          components={{
                            DropdownIndicator: () => null,
                            IndicatorSeparator: () => null,
                            CrossIcon: () => null,
                          }}
                          id='selectedSwitchProviderId'
                          options={[defaultRoleWithValue, ...switchPlatformsData.map((ele: any) => { return { value: ele.switchProviderId, label: ele.switchProviderName } })]}
                          isLoading={!switchPlatformsData || switchPlatformsData.length === 0}
                          isSearchable={true}
                          isClearable={false}
                          styles={newSelectStyle}
                          placeholder='selectedSwitchProvider'
                          value={{
                            value: selectedSwitchProviderId,
                            label: selectedSwitchProviderName,
                          }}
                          onChange={(e: any) => {
                            setSelectedSwitchProviderId(e.value)
                            setSelectedSwitchProviderName(e.label)
                            trackEvent({
                              Path: '/emp-switch-selected-switchProvider/lookup',
                              DomSelector: 'emp-switch-selected-switchProviders-select-input',
                            })
                            setSelectedSwitchPlatformId(defaultRoleWithValue.value)
                            setSelectedSwitchPlatformName(defaultRoleWithValue.label)
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        <Select
                          components={{
                            DropdownIndicator: () => null,
                            IndicatorSeparator: () => null,
                            CrossIcon: () => null,
                          }}
                          id='selectedSwitchPlatformId'
                          options={
                            getSelectedProviders()
                          }
                          isLoading={!getSelectedProviders() || getSelectedProviders().length === 0}
                          isSearchable={true}
                          isClearable={false}
                          styles={newSelectStyle}
                          placeholder='selectedSwitchPlatform'
                          value={{
                            value: selectedSwitchPlatformId,
                            label: selectedSwitchPlatformName,
                          }}
                          onChange={(e: any) => {
                            setSelectedSwitchPlatformId(e.value)
                            setSelectedSwitchPlatformName(e.label)
                            trackEvent({
                              Path: '/emp-switch-selected-switchPlatform/lookup',
                              DomSelector: 'emp-switch-selected-switchPlatforms-select-input',
                            })
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className='text-muted fw-bold text-muted d-block fs-7'>
                    <input
                      className={`form-check-input`}
                      type='checkbox'
                      checked={noSwitchKnowledgeChecked}
                      onChange={(e: any) => {
                        setNoSwitchKnowledgeChecked(e.target.checked)
                      }}
                    />
                  </span>

                </td>
              </tr>
            </tbody>
          </table>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0'>
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-100px text-hover-primary px-2'>
                  <div className='d-flex justify-content-start'>
                    {checkboxCheckedCountForName && (
                      <span className='svg-icon svg-icon-primary svg-icon-2x'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          viewBox='0 0 35 35'
                          version='1.1'
                        >
                          <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
                            <rect x='0' y='0' width='24' height='24' />
                            <path
                              d='M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z'
                              fill='#000000'
                            />
                          </g>
                        </svg>
                      </span>
                    )}
                    {toggleSortForName === 'ASC' ? (
                      <span className='svg-icon svg-icon-primary svg-icon-2x'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          viewBox='0 0 35 35'
                          version='1.1'
                        >
                          <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
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
                    ) : toggleSortForName === 'DSC' ? (
                      <span className='svg-icon svg-icon-primary svg-icon-2x'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          viewBox='0 0 35 35'
                          version='1.1'
                        >
                          <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
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
                    ) : null}

                    {!checkboxCheckedCountForName &&
                      toggleSortForName !== 'ASC' &&
                      toggleSortForName !== 'DSC' && (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 35 35'
                          fill='none'
                        >
                          <path
                            opacity='0.3'
                            d='M10.3 14.3L11 13.6L7.70002 10.3C7.30002 9.9 6.7 9.9 6.3 10.3C5.9 10.7 5.9 11.3 6.3 11.7L10.3 15.7C9.9 15.3 9.9 14.7 10.3 14.3Z'
                            fill='currentColor'
                          />
                          <path
                            d='M21 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22ZM11.7 15.7L17.7 9.70001C18.1 9.30001 18.1 8.69999 17.7 8.29999C17.3 7.89999 16.7 7.89999 16.3 8.29999L11 13.6L7.70001 10.3C7.30001 9.89999 6.69999 9.89999 6.29999 10.3C5.89999 10.7 5.89999 11.3 6.29999 11.7L10.3 15.7C10.5 15.9 10.8 16 11 16C11.2 16 11.5 15.9 11.7 15.7Z'
                            fill='currentColor'
                          />
                        </svg>
                      )}
                    <span style={{ cursor: 'pointer' }} onClick={() => {
                      setToggleSearchFilterForName(true)
                      checkboxDataForName.length === 0 &&
                        setCheckboxDataForName([
                          defaultCheckbox,
                          ..._.uniqBy(sidMappingData, 'employeeName').map((item) => {
                            return {
                              value: item.employeeName,
                              label: item.employeeName,
                              checkStatus: false,
                            }
                          }),
                        ])
                    }}>Employee Name</span>
                  </div>
                </th>
                <th className='min-w-100px text-hover-primary'>
                  <div className='d-flex justify-content-start'>
                    {checkboxCheckedCountForEmail && (
                      <span className='svg-icon svg-icon-primary svg-icon-2x'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          viewBox='0 0 35 35'
                          version='1.1'
                        >
                          <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
                            <rect x='0' y='0' width='24' height='24' />
                            <path
                              d='M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z'
                              fill='#000000'
                            />
                          </g>
                        </svg>
                      </span>
                    )}
                    {toggleSortForEmail === 'ASC' ? (
                      <span className='svg-icon svg-icon-primary svg-icon-2x'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          viewBox='0 0 35 35'
                          version='1.1'
                        >
                          <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
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
                    ) : toggleSortForEmail === 'DSC' ? (
                      <span className='svg-icon svg-icon-primary svg-icon-2x'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24px'
                          height='24px'
                          viewBox='0 0 35 35'
                          version='1.1'
                        >
                          <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
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
                    ) : null}

                    {!checkboxCheckedCountForEmail &&
                      toggleSortForEmail !== 'ASC' &&
                      toggleSortForEmail !== 'DSC' && (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 35 35'
                          fill='none'
                        >
                          <path
                            opacity='0.3'
                            d='M10.3 14.3L11 13.6L7.70002 10.3C7.30002 9.9 6.7 9.9 6.3 10.3C5.9 10.7 5.9 11.3 6.3 11.7L10.3 15.7C9.9 15.3 9.9 14.7 10.3 14.3Z'
                            fill='currentColor'
                          />
                          <path
                            d='M21 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22ZM11.7 15.7L17.7 9.70001C18.1 9.30001 18.1 8.69999 17.7 8.29999C17.3 7.89999 16.7 7.89999 16.3 8.29999L11 13.6L7.70001 10.3C7.30001 9.89999 6.69999 9.89999 6.29999 10.3C5.89999 10.7 5.89999 11.3 6.29999 11.7L10.3 15.7C10.5 15.9 10.8 16 11 16C11.2 16 11.5 15.9 11.7 15.7Z'
                            fill='currentColor'
                          />
                        </svg>
                      )}
                    <span style={{ cursor: 'pointer' }} onClick={() => {
                      setToggleSearchFilterForEmail(true)
                      checkboxDataForEmail.length === 0 &&
                        setCheckboxDataForEmail([
                          defaultCheckbox,
                          ..._.uniqBy(sidMappingData, 'employeeEmail').map((item) => {
                            return {
                              value: item.employeeEmail,
                              label: item.employeeEmail,
                              checkStatus: false,
                            }
                          }),
                        ])
                    }}>Employee Email</span>
                  </div>
                </th>
                <th className='min-w-100px'>
                  <div className='d-flex justify-content-start' style={{ flexDirection: 'column' }}>

                    <Tooltip key={_.uniqueId()} title={<span style={{ padding: '6px 6px', borderRadius: '6px' }}>Drag right from mouse</span>} placement='top-end'>
                      <span>
                        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', width: '252rem', height: '29rem' }}>
                          <span>Employee Switch Platform</span>
                          <div className='text-muted fw-bold d-flex flex-direction-row' style={{ paddingTop: '84px', borderBottom: '0', border: '1px solid grey' }}>
                            {switchPlatformsData && switchPlatformsData.length > 0 ? (
                              switchPlatformsData.sort((a: ISwitchKnowledgePlatforms, b: ISwitchKnowledgePlatforms) => a.switchProviderId - b.switchProviderId)
                                .map((item: ISwitchKnowledgePlatforms) => {
                                  return (
                                    <ul ui-id={item.switchProviderId} key={_.uniqueId()} className='test py-2 px-0' style={{
                                      marginBottom: '0', listStyle: 'none', border: '1px solid grey', display: 'flex', fontSize: '9px', position: 'relative'
                                    }}
                                    >
                                      <div className='text-hover-primary' data-id={item.switchProviderId}
                                        style={{
                                          maxWidth: '-webkit-fill-available', fontSize: 'larger', whiteSpace: 'normal', fontWeight: 'bolder',
                                          left: '5%', bottom: '103%', position: 'absolute'
                                        }}
                                      >{item.switchProviderName}
                                      </div>
                                      {item.switchPlatforms && item.switchPlatforms.length > 0 ? (
                                        item.switchPlatforms.map((platformItem: IGenericLookup, index: number) => {
                                          return (
                                            <>
                                              <li id={platformItem.value} key={_.uniqueId()} style={{ writingMode: 'vertical-rl' }}
                                                className='text-muted fs-9 fw-bold text-hover-primary px-3'>
                                                {platformItem.label}
                                              </li>
                                              {
                                                item.switchPlatforms.length - 1 !== index &&
                                                <div style={{ borderLeft: '1px solid grey' }} />
                                              }
                                            </>
                                          )
                                        })
                                      ) : (
                                        <h6 className='text-muted fw-bold text-hover-primary'>No switch Platform found!</h6>
                                      )}
                                    </ul>
                                  )
                                })
                            ) : (
                              <h6 className='text-muted fw-bold text-hover-primary'>No switch Platform found!</h6>
                            )}
                          </div>
                        </div>
                      </span>
                    </Tooltip>

                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sidMappingData.map((item: IEmployeeSwitchKnowledge) => {
                return (
                  <tr key={_.uniqueId()}>
                    <td className='text-start' style={{ cursor: 'text' }}>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-muted fw-bold fs-7 text-hover-gray-800'>
                          {item.employeeName}
                        </span>
                      </div>
                    </td>
                    <td className='text-start' style={{ cursor: 'text' }}>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-muted fw-bold fs-7 text-hover-gray-800'>
                          {item.employeeEmail}
                        </span>
                      </div>
                    </td>
                    <td className='text-start' style={{ cursor: 'pointer' }}>
                      <div className='d-flex justify-content-start flex-column me-4'>
                        <Tooltip key={_.uniqueId()} title={<span style={{ padding: '6px 6px', borderRadius: '6px' }}>Click to edit</span>} placement='top'>
                          <span>
                            <EditableHorizontalCheckboxList
                              checkboxListName='Employee Switch Platform'
                              id={item.employeeEmail}
                              defaultData={switchPlatformsDataFlat}
                              data={item.switchPlatforms}
                              meWidth='2'
                              setData={(returnedData: IGenericLookup[]) => {
                                trackEvent({
                                  Path: 'employee-switch-mapping',
                                  DomSelector: "employee-switch-mapping-checkboxlist",
                                })
                                handlePatchRequest(returnedData)
                              }}
                            />
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
      {
        toggleSearchFilterForName && (
          <CustomSearchFilter
            filterId='Employee Name'
            data={checkboxDataForName}
            top='5%'
            left='15%'
            maxHeight='720px'
            width='450px'
            setSortOrder={(sortOrder: sortType) => {
              setAllSortingsOnDataTable('Employee Name', sortOrder)
              setToggleSearchFilterForName(false)
            }}
            toggleSearchFilter={toggleSearchFilterForName}
            setToggleSearchFilter={(setToggle: boolean) => {
              setToggleSearchFilterForName(setToggle)
            }}
            setSearchFilter={(filterType: checkboxListType, filterValueList: IGenericLookup[]) => {
              setCheckboxDataForName(filterValueList)
            }}
          />
        )
      }
      {
        toggleSearchFilterForEmail && (
          <CustomSearchFilter
            filterId='Employee Email'
            data={checkboxDataForEmail}
            top='5%'
            left='29%'
            maxHeight='720px'
            width='450px'
            setSortOrder={(sortOrder: sortType) => {
              setAllSortingsOnDataTable('Employee Email', sortOrder)
              setToggleSearchFilterForEmail(false)
            }}
            toggleSearchFilter={toggleSearchFilterForEmail}
            setToggleSearchFilter={(setToggle: boolean) => {
              setToggleSearchFilterForEmail(setToggle)
            }}
            setSearchFilter={(filterType: checkboxListType, filterValueList: IGenericLookup[]) => {
              setCheckboxDataForEmail(filterValueList)
            }}
          />
        )
      }
    </div >
  )
}

export { EmployeeSwitchKnowledgeMapping }
