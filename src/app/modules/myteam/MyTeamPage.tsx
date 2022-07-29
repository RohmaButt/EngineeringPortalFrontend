import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import MyOrgChart from './components/MyOrgChart'

const MyTeamPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/my-team/orgchart'>
          <MyOrgChart />
        </Route>
       <Redirect from='/my-team' exact={true} to='/my-team/orgchart' />
        <Redirect to='/my-team/orgchart' />
      </Switch>
    </>
  )
}

export default MyTeamPage


