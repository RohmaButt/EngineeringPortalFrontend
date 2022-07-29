import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { RegionsLookup } from './components/RegionsLookup'
import { ApprovalLineLookup } from './components/ApprovalLineLookup'
import { AccountSIDRegionMapping } from './components/AccountSIDRegionMapping'
import { ResourceModelRolesLookup } from './components/ResourceModelRolesLookup'
import { EmployeeSIDRegionMapping } from './components/EmployeeSIDRegionMapping'
import { EmployeeSIDRoleMapping } from './components/EmployeeSIDRoleMapping'
import { EmployeeSwitchKnowledgeMapping } from './components/EmployeeSwitchKnowledgeMapping'

const SIDResourcePlanningPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/sid-resource-planning/sid-region-mapping'>
          <RegionsLookup className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/sid-resource-planning/workflow-for-approval'>
          <ApprovalLineLookup className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/sid-resource-planning/accounts-regional-mapping'>
          <AccountSIDRegionMapping className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/sid-resource-planning/employees-regional-mapping'>
          <EmployeeSIDRegionMapping className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/sid-resource-planning/employees-role-mapping'>
          <EmployeeSIDRoleMapping className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/sid-resource-planning/resource-Model-roles'>
          <ResourceModelRolesLookup className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/sid-resource-planning/employee-switch-knowledge'>
          <EmployeeSwitchKnowledgeMapping className='mb-5 mb-xl-8' />
        </Route>
        <Redirect
          from='/sid-resource-planning'
          exact={true}
          to='/sid-resource-planning/sid-region-mapping'
        />
        <Redirect to='/sid-resource-planning/sid-region-mapping' />
      </Switch>
    </>
  )
}

export default SIDResourcePlanningPage
