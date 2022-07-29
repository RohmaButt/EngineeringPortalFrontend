import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ApiPortal from './components/ApiPortal'
import Relationships from './components/Relationships'
import ServiceCatalog from './components/ServiceCatalog'

const MyGeekToolBox: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/my-toolbox/api-portal'>
          <ApiPortal />
        </Route>
        <Route path='/my-toolbox/relationship'>
          <Relationships />
        </Route>
        <Route path='/my-toolbox/service-catalogue'>
          <ServiceCatalog />
        </Route>
      </Switch>
    </>
  )
}

export default MyGeekToolBox
