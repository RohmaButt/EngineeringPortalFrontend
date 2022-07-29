import React, {useState, useEffect, Component} from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import axios from 'axios'
import '../components/mygeektoolbox.css'
import Select from 'react-select'
import {getToken, getUser} from '../../../../app/modules/auth/Common.ts'
import {ReactComponent as LoadingIcon} from '../../../../_metronic/assets/logos/loading.svg'
import {useTracking} from 'react-tracking'

function ApiPortal() {
  const {trackEvent} = useTracking()
  const URL = process.env.REACT_APP_BASE_URL

  const [isLoading, setLoading] = React.useState(true)
  const [items, setItems] = React.useState([])
  const [selectedOption, setSelectedOption] = useState('shared-shm.json')
  const [value, setValue] = React.useState('shared-shm.json')
  axios.defaults.baseURL = URL
  axios.defaults.headers.common['portal-token-key'] = getToken()
  axios.defaults.headers.common['portal-user-name'] = getUser()
  axios.defaults.headers.get['Content-Type'] = 'application/json'
  axios.defaults.mode = 'cors'

  React.useEffect(() => {
    let unmounted = false
    async function getAPIs() {
      const response = await fetch('api-index.json')
      const body = await response.json()
      if (!unmounted) {
        setItems(body.Docs.map(({label, url}) => ({label: label, value: url})))
        setLoading(false)
      }
    }
    getAPIs()
    return () => {
      unmounted = true
    }
  }, [])

  return (
    <div className='card'>
      {/*  {isLoading && (
        <div className='px-5 py-6'>
          <LoadingIcon width={30} height={30} />
        </div>
      )} */}
      <div className='d-flex flex-stack'>
        <div className='w-300px w-md-300px px-10 py-5 information-container wrapper'>
          <Select
            value={items.filter(function (items) {
              return items.value === selectedOption
            })}
            disabled={isLoading}
            options={items}
            onChange={(e) => {
              setValue(e.value)
              setSelectedOption(e.value)
              trackEvent({
                Path: '/my-toolbox/api-portal',
                DomSelector: 'portfolio-select',
              })
            }}
          />
        </div>
      </div>
      <SwaggerUI url={value} />
    </div>
  )
}

export default ApiPortal
