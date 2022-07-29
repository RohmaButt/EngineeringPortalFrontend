import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CareerFramework from './components/CareerFramework'
import CoreCompetencies from './components/CoreCompetencies'
import WhatIsImpact from './components/WhatIsImpact'
import AllRoles from './components/MultiplePages'
import { AIDI } from './components/AidiPage'

const MyCareerPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/my-career/career-framework'>
          <CareerFramework />
        </Route>
        <Route path='/my-career/all-roles-engineering'>
          <AllRoles />
        </Route>
        <Route path='/my-career/all-roles-aidi'>
          <AIDI />
        </Route>
        <Route path='/my-career/what-is-impact'>
          <WhatIsImpact />
        </Route>
        <Route path='/my-career/core-competencies'>
          <CoreCompetencies />
        </Route>
        <Redirect from='/my-career' exact={true} to='/my-career/career-framework' />
        <Redirect to='/my-career/career-framework' />
      </Switch>
    </>
  )
}

export default MyCareerPage
