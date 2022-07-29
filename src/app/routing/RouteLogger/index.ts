const API_URL = process.env.REACT_APP_BASE_TRACKER_API_URL

//Logging routes
export const logRoutes = (route: string) => {
  fetch(`${API_URL}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      Email: localStorage.getItem('email'),
      Path: route,
      ActionType: 1,
    }),
  })
}

// activity logger for DOM
export const logDomActivity = (data: any) => {
  fetch(`${API_URL}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      Email: localStorage.getItem('email'),
      ActionType: 3,
      ...data,
    }),
  })
}
