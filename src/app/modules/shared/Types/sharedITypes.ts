import { date } from "yup"

/*Shared statics*/
export const defaultCheckbox = {
  value: -1,
  label: '(Select All)',
  checkStatus: false,
}

export const defaultSelect = {
  value: 'Select',
  label: '(Select)',
}

export const defaultAccountRegion = {
  value: 98,
  label: 'Not Mapped to SID Region',
}

export const defaultRole = {
  value: 99,
  label: 'No Role assigned',
}

export const defaultRoleWithValue = {
  value: 99,
  label: 'Select',
}

export const defaultPlatform = {
  value: 99,
  label: 'Not Assigned',
}

export const shiftsData = [
  {
    value: '0',
    label: '0',
  },
  {
    value: '1',
    label: '1',
  },
  {
    value: '5',
    label: '5',
  },
]
export const periodLockStatusData = [
  {
    value: true,    // period is open to update
    label: 'Open'
  },
  {
    value: false, // period is locked to update
    label: 'Closed'
  }
]

export const statusData = [
  {
    value: '1',
    label: 'Active',
  },
  {
    value: '0',
    label: 'Passive',
  },
]

export const dedicatedData = [
  {
    value: '0',
    label: '0',
  },
  {
    value: '1',
    label: '1',
  },
]

/*Shared Interfaces*/
export interface Menu {
  fontIcon: string
  hasBullet: boolean
  icon: string
  isActive: boolean
  isLandingPage: boolean
  isNewTab: boolean
  linkTo: string
  parentKey: number
  permissionKey: number
  sortOrder: number
  title: string
}

export interface IRegionData {
  id: number
  name: string
  isRegion: boolean
  regionalManager: string
  isImmutable: boolean
  isActive: boolean
  department: string
  subDepartment: string
  team: string

}
export interface IRegionsLookup {
  accountId: any
  value: number
  label: string
}

export interface IGenericLookup {
  value: any
  label: any
  checkStatus: boolean
  associatedType?: any
  parentId?: any
  parentName?: any
  // parent?: any
}

export interface ISelectookup {
  value: number
  label: string
}

export interface IDeletedData {
  checkboxIndex: number
  checkboxStatus: boolean
}

export interface INewRegionModalProps {
  toggleNewMemeber: boolean
  setToggleNewMemeber: (/*event: React.MouseEvent<HTMLButtonElement>,*/ showStatus: boolean) => void
  users: any
  employeeData: any
  regionsData: IRegionData[]
  setRegionsData: (regionsData: IRegionData[]) => void
}

export interface INewProductModalProps {
  toggleNewMemeber: boolean
  setToggleNewMemeber: (showStatus: boolean) => void
  productsData: any
  setProductsData: (productsData: any[]) => void
}

export interface INewGeneralModalProps {
  toggleNewMemeber: boolean
  setToggleNewMemeber: (showStatus: boolean) => void
  Data: any
  setData: (Data: any[]) => void
}

export interface ITimeSheetModalProps extends INewGeneralModalProps {
  jiraCategoriesData: any
}

interface IShowPopup {
  show: boolean
  id: number
}

export interface IDeletionPopupModalProps {
  popup: IShowPopup
  setPopup: (setPopup: IShowPopup) => void
  setForDeletionInConfirmationOpen: () => void
}

// export interface INewPeriodModalProps  extends INewGeneralModalProps {}

export interface INewRolesModalProps extends INewGeneralModalProps {
  departments: IGenericLookup[]
  subDepartments: IGenericLookup[]
  teams: IGenericLookup[]
}
export interface IRegionMappingData {
  accountCountry: string
  accountId: number
  accountName: string
  accountStatus: number
  countryId: number
  sidRegionid: number
  sidRegionName: string
}

export interface IEmployeeRegionMapping {
  id: number
  employeeEmail: string
  country: string
  legalCountry: string
  name: string
  regionId: number
  regionName: string
  teamName: string
}

export interface IEmployeeRoleMapping {
  employeeEmail: string
  name: string
  positionTitle: string
  teamName: string
  roles: IGenericLookup[]
}

export interface IEmployeeSwitchKnowledge {
  employeeEmail: string
  employeeName: string
  switchPlatforms: IGenericLookup[]
}

export interface IDeletedData {
  checkboxIndex: number
  checkboxStatus: boolean
}

export interface ICustomSearchFilter {
  filterId: checkboxListType
  toggleSearchFilter: boolean
  data: IGenericLookup[]
  top: string
  left: string
  width: string
  maxHeight: string
  setSortOrder: (sortOrder: sortType) => void
  setToggleSearchFilter: (setToggle: boolean) => void
  setSearchFilter: (filterType: checkboxListType, filterValueList: IGenericLookup[]) => void
}

export interface ICheckboxData {
  value: string
  index: number
  status: boolean
}

export interface ICheckboxProps {
  checkboxListName: checkboxListType
  data: IGenericLookup[]
  setData: (data: IGenericLookup[]) => void
}

export interface ICheckboxListProps {
  checkboxListName: checkboxListType
  id: string
  data: IGenericLookup[]
  setData: (data: IGenericLookup[]) => void
  defaultData: IGenericLookup[] | any
  meWidth: string
}

export interface IResourceModelRole {
  id: number
  roleResourceModel: string
  roleGroupId: number
  roleGroupName: string
  paycomSubDepartment: number
  status: number
  isDedicated: number
  shifts: number
  modifyDate: string
  isActive: boolean
  deleteCheck: boolean
}

export interface INewResourceModelRolesModalProps {
  toggleNewResounceModel: boolean
  setToggleNewResounceModel: (showStatus: boolean) => void
  departments: any[]
  resouceModelData: IResourceModelRole[]
  setResounceModelData: (resourceModelRoles: IResourceModelRole[]) => void
}

export interface INewEmployeeSwitchKnowledgeModalProps {
  toggleNewResounceModel: boolean
  setToggleNewResounceModel: (showStatus: boolean) => void
  sidEmployeeData: any[]
  sidRegionData: any[]
  switchPlatformData: any[]
  switchProviderData: any[]
  employeeSwitchKnowledgeData: INewEmployeeSwitchKnowledge[]
  setEmployeeSwitchKnowledgeData: (
    employeeSwitchKnowledgeData: INewEmployeeSwitchKnowledge[]
  ) => void
}

export interface INewEmployeeSwitchKnowledge {
  id: number
  workEmail: string
  workStatus: string
  changeStatus: string
  team: string
  country: string
  department: string
  employeeSidregion: number
  etlDate: string
  firstSupervisorWorkEmail: string
  fullName: string
  legalCountry: 'Afiniti Pakistan'
  // subDepartment: "SID"
  switchPlatformId: number
  switchPlatformName: string
  switchProviderId: number
  switchProviderName: string
  deleteCheck: boolean
}

export interface IPaycomDepartments {
  departmentCode: string
  department: string
  subDepartment: string
  subDepartmentCode: string
  subDepartmentDisplayName: string
}

export interface IResouceModelGroup {
  inputValue?: string
  label: string
  value?: string
}

export interface IDataTableProps {
  tableData: []
}

export interface NewEmployeeSwitchKnowledge {
  workEmail: string
  fullName: string
  team: string
  workStatus: string
  firstSupervisorWorkEmail: string
  legalCountry: string
  country: string
}

export interface IRoles {
  departmentId: number
  id: number
  isActive: boolean
  name: string
  shiftCount: number
  subdepartmentId: number
  teamId: number
}

export interface ISwitchKnowledgePlatforms {
  switchProviderId: number
  switchProviderName: string
  switchPlatforms: IGenericLookup[]
}

export interface ISwitchKnowledgePlatformsProvidersFlat {
  parentId: number
  parentName: string
  value: number
  label: string
  checkStatus: boolean
}

export interface IPeriod {
  id: number
  periodStartDate: Date
  periodEndDate: Date
  lockStatus: boolean
  insertionDate: string
  modifyUser: string
  modifyDate: string
  isActive: boolean
}

export interface IDatePickerProps {
  setStartDate: any
  setEndDate: any
}


export interface ITimeSheetAdmin {
  employeeEmail: string
  categoryName: string
  typeName: string
  week1: number
  week2: number
  week3: number
  week4: number
  week5: number
}

// /*Shared union types*/
export type checkboxListType =
  | 'Account Name'
  | 'Account Status'
  | 'Account Region'
  | 'Account Country'
  | 'Employee Name'
  | 'Employee Email'
  | 'Paycom Team'
  | 'Location Country'
  | 'Legal Country'
  | 'SID Employee Region'
  | 'Position Title'
  | 'Employee Role'
  | 'Employee Switch Platform'
export type activeStatus = 1 | 0

export type sortType = 'ASC' | 'DSC' | ''
