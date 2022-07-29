import {keyBy} from 'lodash'
export const setImpUserSession = (userObject: any) => {
  removeImpUserSession()
  sessionStorage.setItem('Imp_token', userObject.crowdToken)
  sessionStorage.setItem('Imp_user', userObject.userDisplayName)
  sessionStorage.setItem('Imp_email', userObject.email)
  sessionStorage.setItem('Imp_userName', userObject.userName)
  sessionStorage.setItem('Imp_paycomUserInfo', JSON.stringify(userObject.paycomUserObjInfo))
  sessionStorage.setItem('Imp_canImpersonate', 'false')
  sessionStorage.setItem(
    'Imp_componentRights',
    JSON.stringify(keyBy(userObject.userProfileData, 'code'))
  )
}

export const removeImpUserSession = () => {
  // Though sessionStorage auto removes but still in case requires it
  sessionStorage.removeItem('Imp_token')
  sessionStorage.removeItem('Imp_user')
  sessionStorage.removeItem('Imp_permissions')
  sessionStorage.removeItem('Imp_email')
  sessionStorage.removeItem('Imp_OrgChart')
  sessionStorage.removeItem('Imp_userName')
  sessionStorage.removeItem('Imp_paycomUserInfo')
  sessionStorage.removeItem('Imp_kpiData')
  sessionStorage.removeItem('Imp_componentRights')
}

export const setUserSession = (userObject: any) => {
  removeUserSession()
  localStorage.setItem('token', userObject.crowdToken)
  localStorage.setItem('email', userObject.email)
  localStorage.setItem('userName', userObject.userName)
  localStorage.setItem('componentRights', JSON.stringify(keyBy(userObject.userProfileData, 'code')))
}

export const removeUserSession = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('OrgChart')
  localStorage.removeItem('userName')
  localStorage.removeItem('kpiData')
  localStorage.removeItem('componentRights')
}

// return the userName data from the session storage
export const getUser = () => {
  return sessionStorage.getItem('Imp_userName') || localStorage.getItem('userName') || null
}

export const getEmail = () => {
  return sessionStorage.getItem('Imp_email') || localStorage.getItem('email') || null
}

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('Imp_token') || localStorage.getItem('token') || null
}

// set token to session storage
export const setToken = (crowdToken: any) => {
  localStorage.setItem('token', crowdToken)
}

export const getUserName = () => {
  return sessionStorage?.getItem('Imp_userName') || localStorage.getItem('userName') || null
}

export const setKPIBulkData = (kpiData: any) => {
  localStorage.removeItem('kpiData')
  localStorage.setItem('kpiData', JSON.stringify(kpiData))
}

export const getKPIBulkData = () => {
  return (
    JSON.parse(sessionStorage.getItem('Imp_kpiData') || '') ||
    JSON.parse(localStorage.getItem('kpiData') || '')
  )
}

export const getLandingPage = () => {
  const data = keyBy(JSON.parse(localStorage.getItem('componentRights') || ''), 'code')
    ?.LANDING_PAGE?.props?.LANDING_PAGE
  return data
}
