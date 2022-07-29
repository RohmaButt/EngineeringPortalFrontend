import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Admin } from './components/Admin'
import { PeriodMgmt } from './components/PeriodMgmt'
import { TimesheetData } from './components/TimesheetData'

const TimeSheetPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/timekeeping-in-percent/period-management'>
          <PeriodMgmt className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/timekeeping-in-percent/timesheet'>
          <TimesheetData className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/timekeeping-in-percent/administration'>
          <Admin className='mb-5 mb-xl-8' />
        </Route>
        <Redirect
          from='/timekeeping-in-percent'
          exact={true}
          to='/timekeeping-in-percent/period-management'
        />
        <Redirect to='/timekeeping-in-percent/period-management' />
      </Switch>
    </>
  )
}

export default TimeSheetPage
