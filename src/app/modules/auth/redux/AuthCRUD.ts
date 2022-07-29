import axios from 'axios'
import {AuthModel} from '../models/AuthModel'

const API_URL = process.env.REACT_APP_BASEURL
export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/User/Login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`
// Server should return AuthModel
export async function login(email: string, password: string) {
  return await fetch(LOGIN_URL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      username: email,
      password: password,
    }),
  })
    .then(async (response) => {
      if (response.status === 401) {
        return await response.text()
      } else return await response.json()
    })
    .catch((error) => {
      console.error('error', error)
    })
}

// Server should return AuthModel
export function register(email: string, firstname: string, lastname: string, password: string) {
  return axios.post<AuthModel>(REGISTER_URL, {
    email,
    firstname,
    lastname,
    password,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.get<{result: boolean}>(REQUEST_PASSWORD_URL, {
    params: {
      email: email,
    },
  })
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return {user: {email: 'yahya.ahmed@afiniti.com', first_name: 'Yahya', id: 963423}}
}
