/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTracking } from 'react-tracking'
import { getAllSIDRolesFromDB, getEmployeesRoleMappingFromDB, } from '../../shared/Services/sharedAPIsService'
import {
  checkboxListType,
  defaultCheckbox,
  IGenericLookup,
  IEmployeeRoleMapping,
  sortType,
  defaultRole,
} from '../../shared/Types/sharedITypes'
import { fetchPostMiddleWare } from '../../../pages/dashboard/utils/apiMiddleWare'
import CustomSearchFilter from '../../shared/CustomSearchFilter/CustomSearchFilter'
import _ from 'lodash'
import Tooltip from '@mui/material/Tooltip'
import EditableHorizontalCheckboxListSimple from '../../shared/EditableHorizontalCheckboxListSimple/EditableHorizontalCheckboxListSimple'

type Props = {
  className: string
}

const EmployeeSIDRoleMapping: React.FC<Props> = ({ className }) => {
  const [rolesData, setRolesData] = useState<IGenericLookup[]>([])
  const { trackEvent } = useTracking()
  const [sidMappingData, setSidMappingData] = useState<IEmployeeRoleMapping[]>([])
  const [sidMappingDataCloned, setSidMappingDataCloned] = useState<
    IEmployeeRoleMapping[]
  >([])

  const [checkboxDataForName, setCheckboxDataForName] = useState<IGenericLookup[]>([])
  const [checkboxDataForEmail, setCheckboxDataForEmail] = useState<IGenericLookup[]>([])
  const [checkboxDataForTeam, setCheckboxDataForTeam] = useState<IGenericLookup[]>([])
  const [checkboxDataForPosition, setCheckboxDataForPosition] = useState<IGenericLookup[]>([])
  const [checkboxDataForRole, setCheckboxDataForRole] = useState<IGenericLookup[]>([])

  const [checkboxCheckedCountForName, setCheckboxCheckedCountForName] = useState(false)
  const [checkboxCheckedCountForEmail, setCheckboxCheckedCountForEmail] = useState(false)
  const [checkboxCheckedCountForTeam, setCheckboxCheckedCountForTeam] = useState(false)
  const [checkboxCheckedCountForPosition, setCheckboxCheckedCountForPosition] = useState(false)
  const [checkboxCheckedCountForRole, setCheckboxCheckedCountForRole] = useState(false)

  const [toggleSearchFilterForName, setToggleSearchFilterForName] = useState(false)
  const [toggleSearchFilterForEmail, setToggleSearchFilterForEmail] = useState(false)
  const [toggleSearchFilterForTeam, setToggleSearchFilterForTeam] = useState(false)
  const [toggleSearchFilterForPosition, setToggleSearchFilterForPosition] = useState(false)
  const [toggleSearchFilterForRole, setToggleSearchFilterForRole] = useState(false)

  const [toggleSortForName, setToggleSortForName] = useState('')
  const [toggleSortForEmail, setToggleSortForEmail] = useState('')
  const [toggleSortForTeam, setToggleSortForTeam] = useState('')
  const [toggleSortForPosition, setToggleSortForPosition] = useState('')
  const [toggleSortForRole, setToggleSortForRole] = useState('')

  useEffect(() => {
    ; (async () => {
      await getEmployeesRoleMappingFromDB()
        .then((response: any) => {
          if (response != null) {
            console.log('response', response)
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

      await getAllSIDRolesFromDB()
        .then((response: any) => {
          if (response != null) {
            console.log('response', response)
            const data = response.data.map((item: any) => {
              return {
                value: item.id,
                label: item.name,
                checkStatus: false
              }
            })
            setRolesData([...data])
          }
        })
        .catch((error: any) => {
          toast.error('Something went wrong. Please reload page or contact BI team')
          console.error('Exception happened:getAllSIDRolesFromDB', error)
        })
    })()
  }, [])

  function handlePatchRequest(patchedItem: any) {
    const requestObject = {
      RoleId: patchedItem[0]?.value,
      EmployeeEmail: patchedItem[0]?.associatedType,
      IsActive: patchedItem[0]?.checkStatus
    }
      ; (async () => {
        await fetchPostMiddleWare(
          `EmployeeRoleMapping/AddOrUpdateEmployeeRoleMapping`,
          requestObject
        ).then((response: any) => {
          if (response.employeeEmail === patchedItem[0]?.associatedType) {
            const updatingRecord: any = sidMappingData.filter((x: any) => {
              return x.employeeEmail === patchedItem[0]?.associatedType
            })
            if (updatingRecord[0].roles.filter((a: IGenericLookup) => a.value === patchedItem[0]?.value).length !== 0) {
              updatingRecord[0].roles.filter((a: IGenericLookup) => a.value === patchedItem[0]?.value)[0].checkStatus = patchedItem[0]?.checkStatus
            }
            else {
              const newObject = {
                value: patchedItem[0]?.value,
                label: patchedItem[0]?.label,
                checkStatus: patchedItem[0]?.checkStatus
              }
              updatingRecord[0].roles.filter((x: IGenericLookup) => x.value === defaultRole.value && x.label === defaultRole.label).pop() // remove default role
              updatingRecord[0].roles.push(newObject)
            }
            console.log('sidMappingData', ...sidMappingData)
            const refreshedData = [...sidMappingData]
            setSidMappingData(refreshedData)

            console.log('refreshedData', refreshedData)
            toast.success('Data updated successfully.')
          } else toast.error('Data updation failed.')
        })
      })()
  }

  useEffect(() => {
    function reloadFilterationOnData(): void {
      let filteringDataValuesForName: any[] = []
      let filteringDataValuesForEmail: any[] = []
      let filteringDataValuesForTeam: any[] = []
      let filteringDataValuesForPosition: any[] = []
      let filteringDataValuesForRole: any[] = []

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

      filteringDataValuesForTeam = checkboxDataForTeam
        .filter((f: IGenericLookup) => f.checkStatus === true)
        .map((b: IGenericLookup) => b.value)
      if (filteringDataValuesForTeam.length > 0) setCheckboxCheckedCountForTeam(true)
      else setCheckboxCheckedCountForTeam(false)

      filteringDataValuesForPosition = checkboxDataForPosition
        .filter((f: IGenericLookup) => f.checkStatus === true)
        .map((b: IGenericLookup) => b.value)
      if (filteringDataValuesForPosition.length > 0) setCheckboxCheckedCountForPosition(true)
      else setCheckboxCheckedCountForPosition(false)

      filteringDataValuesForRole = checkboxDataForRole
        .filter((f: IGenericLookup) => f.checkStatus === true)
        .map((b: IGenericLookup) => b.value)
      if (filteringDataValuesForRole.length > 0) setCheckboxCheckedCountForRole(true)
      else setCheckboxCheckedCountForRole(false)

      /////APPLY FILTERATION/////
      let filteredData: IEmployeeRoleMapping[] = sidMappingDataCloned
      if (filteringDataValuesForName.length > 0) {
        filteredData = filteredData.filter((f: IEmployeeRoleMapping) =>
          filteringDataValuesForName.includes(f.name)
        )
      }
      if (filteringDataValuesForEmail.length > 0) {
        filteredData = filteredData.filter((f: IEmployeeRoleMapping) =>
          filteringDataValuesForEmail.includes(f.employeeEmail)
        )
      }
      if (filteringDataValuesForTeam.length > 0) {
        filteredData = filteredData.filter((f: IEmployeeRoleMapping) =>
          filteringDataValuesForTeam.includes(f.teamName)
        )
      }
      if (filteringDataValuesForPosition.length > 0) {
        filteredData = filteredData.filter((f: IEmployeeRoleMapping) =>
          filteringDataValuesForPosition.includes(f.positionTitle)
        )
      }
      if (filteringDataValuesForRole.length > 0) {
        if (!filteringDataValuesForRole.includes(defaultRole.label))
          filteredData = filteredData.filter((f: IEmployeeRoleMapping) =>
            f.roles.filter(g => g.checkStatus === true && filteringDataValuesForRole.includes(g.label)).length > 0)
        else {
          const filteredDataDefaults = filteredData.filter((f: IEmployeeRoleMapping) =>
            f.roles.length === f.roles.filter(g => g.checkStatus === false && !filteringDataValuesForRole.includes(g.label)).length)
          const filteredDataUnCheckedData = filteredData.filter((f: IEmployeeRoleMapping) =>
            f.roles.filter(g => g.checkStatus === false && filteringDataValuesForRole.includes(g.label)).length > 0)
          filteredData = [...filteredDataDefaults, ...filteredDataUnCheckedData]
        }
      }
      if (filteredData.length > 0) {
        setSidMappingData(filteredData)
      } else {
        setSidMappingData(sidMappingDataCloned)
      }
    }

    reloadFilterationOnData()
  }, [
    checkboxDataForName,
    checkboxDataForEmail,
    checkboxDataForTeam,
    checkboxDataForPosition,
    checkboxDataForRole,
    sidMappingDataCloned,
  ])

  function setAllSortingsOnDataTable(columnType: checkboxListType, sortOrder: sortType) {
    switch (columnType) {
      case 'Employee Name':
        setToggleSortForName(sortOrder)
        sidMappingData.sort(function (a, b) {
          return sortOrder === 'ASC'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        })
        break
      case 'Employee Email':
        setToggleSortForEmail(sortOrder)
        sidMappingData.sort(function (a, b) {
          return sortOrder === 'ASC'
            ? a.name.localeCompare(b.employeeEmail)
            : b.name.localeCompare(a.employeeEmail)
        })
        break
      case 'Paycom Team':
        setToggleSortForTeam(sortOrder)
        sidMappingData.sort(function (a, b) {
          return sortOrder === 'ASC'
            ? a.teamName.localeCompare(b.teamName)
            : b.teamName.localeCompare(a.teamName)
        })
        break
      case 'Position Title':
        setToggleSortForPosition(sortOrder)
        sidMappingData.sort(function (a, b) {
          return sortOrder === 'ASC'
            ? a.positionTitle.localeCompare(b.positionTitle)
            : b.positionTitle.localeCompare(a.positionTitle)
        })
        break
      case 'Employee Role':
        setToggleSortForRole(sortOrder)
        // sidMappingData.sort(function (a, b) {
        //   return sortOrder === 'ASC'
        //     ? a.roleName.localeCompare(b.roleName)
        //     : b.roleName.localeCompare(a.roleName)
        // })
        break
    }
  }

  const getAssignedRolesCount = () => {
    const defaultRolesCount = sidMappingData.filter((f: IEmployeeRoleMapping) =>
      f.roles.filter(x => x.checkStatus === false && x.label === defaultRole.label).length).length
    const nonDefaultRolesCount = sidMappingData.filter((f: IEmployeeRoleMapping) =>
      f.roles.length === f.roles.filter(x => x.checkStatus === false && x.label !== defaultRole.label).length).length
    return defaultRolesCount + nonDefaultRolesCount
  }

  return (
    <div className={`card ${className} `}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>SID - Employees Role Mapping</span>
          <span className='text-muted mt-1 fw-bold fs-7'>
            {getAssignedRolesCount() || 0} Employees with no role assinged. Please update.</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0'>
            <thead>
              <tr className='fw-bolder text-muted' style={{ cursor: 'pointer' }}>
                <th
                  onClick={() => {
                    setToggleSearchFilterForName(true)
                    checkboxDataForName.length === 0 &&
                      setCheckboxDataForName([
                        defaultCheckbox,
                        ..._.uniqBy(sidMappingData, 'name').map((item) => {
                          return {
                            value: item.name,
                            label: item.name,
                            checkStatus: false,
                          }
                        }),
                      ])
                  }}
                  className='min-w-100px text-hover-primary px-2'
                >
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
                    <span>Employee Name</span>
                  </div>
                </th>
                <th
                  onClick={() => {
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
                  }}
                  className='min-w-100px text-hover-primary'
                >
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
                    <span>Employee Email</span>
                  </div>
                </th>
                <th
                  onClick={() => {
                    setToggleSearchFilterForTeam(true)
                    checkboxDataForTeam.length === 0 &&
                      setCheckboxDataForTeam([
                        defaultCheckbox,
                        ..._.uniqBy(sidMappingData, 'teamName').map((item) => {
                          return {
                            value: item.teamName,
                            label: item.teamName,
                            checkStatus: false,
                          }
                        }),
                      ])
                  }}
                  className='min-w-100px text-hover-primary'
                >
                  <div className='d-flex justify-content-start'>
                    {checkboxCheckedCountForTeam && (
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
                    {toggleSortForTeam === 'ASC' ? (
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
                    ) : toggleSortForTeam === 'DSC' ? (
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

                    {!checkboxCheckedCountForTeam &&
                      toggleSortForTeam !== 'ASC' &&
                      toggleSortForTeam !== 'DSC' && (
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
                    <span>Paycom Team</span>
                  </div>
                </th>
                <th
                  onClick={() => {
                    setToggleSearchFilterForPosition(true)
                    checkboxDataForPosition.length === 0 &&
                      setCheckboxDataForPosition([
                        defaultCheckbox,
                        ..._.uniqBy(sidMappingData, 'positionTitle').map((item) => {
                          return {
                            value: item.positionTitle,
                            label: item.positionTitle,
                            checkStatus: false,
                          }
                        }),
                      ])
                  }}
                  className='min-w-100px text-hover-primary'
                >
                  <div className='d-flex justify-content-start'>
                    {checkboxCheckedCountForPosition && (
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
                    {toggleSortForPosition === 'ASC' ? (
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
                    ) : toggleSortForPosition === 'DSC' ? (
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

                    {!checkboxCheckedCountForPosition &&
                      toggleSortForPosition !== 'ASC' &&
                      toggleSortForPosition !== 'DSC' && (
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
                    <span>Position Title</span>
                  </div>
                </th>
                <th
                  onClick={() => {
                    setToggleSearchFilterForRole(true)
                    checkboxDataForRole.length === 0 &&
                      setCheckboxDataForRole([
                        defaultCheckbox,
                        ..._.uniqBy([defaultRole, ...rolesData], 'label').map((item) => {
                          return {
                            value: item.label,
                            label: item.label,
                            checkStatus: false,
                          }
                        }),
                      ])
                  }}
                  className='min-w-100px text-hover-primary'
                >
                  <div className='d-flex justify-content-start px-2' style={{ flexDirection: 'column' }}>
                    <div>
                      {checkboxCheckedCountForRole && (
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
                      {toggleSortForRole === 'ASC' ? (
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
                      ) : toggleSortForRole === 'DSC' ? (
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

                      {!checkboxCheckedCountForRole &&
                        toggleSortForRole !== 'ASC' &&
                        toggleSortForRole !== 'DSC' && (
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
                      <span>Employee Role</span>
                    </div>
                    <ul
                      style={{
                        listStyle: 'none',
                        paddingLeft: '1px',
                        borderTop: '0',
                        height: '2px',
                        display: 'flex',
                        fontSize: '8px'
                      }}
                    >
                      {rolesData && rolesData.length > 0 ? (
                        rolesData
                          .sort((a: any, b: any) => a.label.localeCompare(b.label))
                          .map((item: IGenericLookup, index: number) => {
                            return (
                              <li key={_.uniqueId()}
                                id={item.value} className='text-muted fw-bold text-hover-primary' >
                                {item.label}
                              </li>
                            )
                          })
                      ) : (
                        <h6>No role found!</h6>
                      )}
                    </ul >

                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sidMappingData.map((item: IEmployeeRoleMapping) => {
                return (
                  <tr key={_.uniqueId()}>
                    <td className='text-start' style={{ cursor: 'text' }}>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className='text-start' style={{ cursor: 'text' }}>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                          {item.employeeEmail}
                        </span>
                      </div>
                    </td>
                    <td className='text-start' style={{ cursor: 'text' }}>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                          {item.teamName}
                        </span>
                      </div>
                    </td>
                    <td className='text-start' style={{ cursor: 'text' }}>
                      <div className='d-flex justify-content-start flex-column'>
                        <span className='text-muted fw-bold d-block fs-7 text-hover-gray-800'>
                          {item.positionTitle}
                        </span>
                      </div>
                    </td>
                    <td className='text-start' style={{ cursor: 'pointer' }}>
                      <div className='d-flex justify-content-start flex-column me-4 px-4'>
                        <Tooltip
                          title={
                            <span
                              style={{
                                padding: '6px 6px',
                                borderRadius: '6px',
                              }}
                            >
                              Click to edit
                            </span>
                          }
                          placement='top'
                        >
                          <span className='text-muted fw-bold d-block fs-7'>
                            <EditableHorizontalCheckboxListSimple
                              checkboxListName='Employee Role'
                              id={item.employeeEmail}
                              defaultData={rolesData}
                              data={item.roles}
                              meWidth='14'
                              setData={(returnedData: IGenericLookup[]) => {
                                trackEvent({
                                  Path: 'employee-role-mapping',
                                  DomSelector: "employee-role-mapping-role-checkboxlist",
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
            top='25%'
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
            top='25%'
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
      {
        toggleSearchFilterForTeam && (
          <CustomSearchFilter
            filterId='Paycom Team'
            data={checkboxDataForTeam}
            top='25%'
            left='60%'
            maxHeight='720px'
            width='450px'
            setSortOrder={(sortOrder: sortType) => {
              setAllSortingsOnDataTable('Paycom Team', sortOrder)
              setToggleSearchFilterForTeam(false)
            }}
            toggleSearchFilter={toggleSearchFilterForTeam}
            setToggleSearchFilter={(setToggle: boolean) => {
              setToggleSearchFilterForTeam(setToggle)
            }}
            setSearchFilter={(filterType: checkboxListType, filterValueList: IGenericLookup[]) => {
              setCheckboxDataForTeam(filterValueList)
            }}
          />
        )
      }
      {
        toggleSearchFilterForPosition && (
          <CustomSearchFilter
            filterId='Position Title'
            data={checkboxDataForPosition}
            top='25%'
            left='60%'
            maxHeight='720px'
            width='450px'
            setSortOrder={(sortOrder: sortType) => {
              setAllSortingsOnDataTable('Position Title', sortOrder)
              setToggleSearchFilterForPosition(false)
            }}
            toggleSearchFilter={toggleSearchFilterForPosition}
            setToggleSearchFilter={(setToggle: boolean) => {
              setToggleSearchFilterForPosition(setToggle)
            }}
            setSearchFilter={(filterType: checkboxListType, filterValueList: IGenericLookup[]) => {
              setCheckboxDataForPosition(filterValueList)
            }}
          />
        )
      }
      {
        toggleSearchFilterForRole && (
          <CustomSearchFilter
            filterId='Employee Role'
            data={checkboxDataForRole}
            top='25%'
            left='74%'
            maxHeight='720px'
            width='450px'
            setSortOrder={(sortOrder: sortType) => {
              setAllSortingsOnDataTable('Employee Role', sortOrder)
              setToggleSearchFilterForRole(false)
            }}
            toggleSearchFilter={toggleSearchFilterForRole}
            setToggleSearchFilter={(setToggle: boolean) => {
              setToggleSearchFilterForRole(setToggle)
            }}
            setSearchFilter={(filterType: checkboxListType, filterValueList: IGenericLookup[]) => {
              setCheckboxDataForRole(filterValueList)
            }}
          />
        )
      }
    </div>
  )
}

export { EmployeeSIDRoleMapping }
