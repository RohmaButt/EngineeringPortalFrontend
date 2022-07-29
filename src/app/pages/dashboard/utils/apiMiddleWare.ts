import {string} from 'yup'
import {getToken, getUser, setToken} from '../../../modules/auth/Common'
import moment from 'moment'

const API_URL = process.env.REACT_APP_BASEURL
export const fetchMiddleWare = async (url: string) => {
  const token = getToken()
  const userName = getUser()
  if (token && userName) {
    return await fetch(`${API_URL}/${url}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'portal-token-key': token,
        'portal-user-name': userName,
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    }).then((response) => {
      if (response && response.headers && response.headers.get('portal-api-token-key')) {
        if (response.headers.get('portal-api-token-key') !== getToken()) {
          setToken(response.headers.get('portal-api-token-key'))
        }
      }
      return response.json()
    })
  }
}

export const fetchPostMiddleWare = async (url: string, params: any) => {
  const token = getToken()
  const userName = getUser()
  if (token && userName) {
    return await fetch(`${API_URL}/${url}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'portal-token-key': token,
        'portal-user-name': userName,
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        ...params,
      }),
    }).then((response) => {
      if (response && response.headers && response.headers.get('portal-api-token-key')) {
        if (response.headers.get('portal-api-token-key') !== getToken()) {
          setToken(response.headers.get('portal-api-token-key'))
        }
      }
      return response.json()
    })
  }
}

export const DeleteMiddleWare = async (url: string) => {
  const token = getToken()
  const userName = getUser()
  if (token && userName) {
    return await fetch(`${API_URL}/${url}`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'portal-token-key': token,
        'portal-user-name': userName,
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    }).then((response) => {
      if (response && response.headers && response.headers.get('portal-api-token-key')) {
        if (response.headers.get('portal-api-token-key') !== getToken()) {
          setToken(response.headers.get('portal-api-token-key'))
        }
      }
      return response
    })
  }
}

export const DeleteBulkMiddleWare = async (url: string, params: any) => {
  const token = getToken()
  const userName = getUser()
  if (token && userName) {
    return await fetch(`${API_URL}/${url}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'portal-token-key': token,
        'portal-user-name': userName,
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(params),
    }).then((response) => {
      if (response && response.headers && response.headers.get('portal-api-token-key')) {
        if (response.headers.get('portal-api-token-key') !== getToken()) {
          setToken(response.headers.get('portal-api-token-key'))
        }
      }
      return response
    })
  }
}

export const PatchMiddleWare = async (url: string, params: any) => {
  const token = getToken()
  const userName = getUser()
  if (token && userName) {  
    return await fetch(`${API_URL}/${url}`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'portal-token-key': token,
        'portal-user-name': userName,
        'Content-Type': 'application/json-patch+json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(params),
    }).then((response) => {
      if (response && response.headers && response.headers.get('portal-api-token-key')) {
        if (response.headers.get('portal-api-token-key') !== getToken()) {
          setToken(response.headers.get('portal-api-token-key'))
        }
      }
      return response
    })
  }
}
