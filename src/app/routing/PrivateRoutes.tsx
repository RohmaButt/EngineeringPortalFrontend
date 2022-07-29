import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Backdrop } from '@mui/material'
import { UserContext } from '../modules/context/UserContext'
const Dashboard = lazy(() => import('../pages/dashboard/index'))
const MyCareerPage = lazy(() => import('../modules/mycareer/MyCareerPage'))
const MyResourcesPage = lazy(() => import('../modules/myresources/MyResourcesPage'))
const MyTeamPage = lazy(() => import('../modules/myteam/MyTeamPage'))
const MyGeekToolbox = lazy(() => import('../modules/mygeektoolbox/MyGeekRouter'))
const SIDResoucePlanningPage = lazy(() => import('../modules/sid-resource-planning/SID-ResourcePlanningPage'))
const GSDResourcePlanningDefinitionPage = lazy(() => import('../modules/gsd-resource-model-definition/GSDResourcePlanningDefinitionPage'))
const TimeSheetPage = lazy(() => import('../modules/time-sheet/TimeSheetPage'))

// Loading screen for main router
const LoadingScreen = () => (
  <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <div className='d-flex justify-content-center'>
      <div className='loadingio-spinner-pulse-8iefm6f0sh2'>
        <div className='ldio-5l8iz9up4l' style={{ background: '#7A7C7D' }}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </Backdrop>
)
export const PrivateRoutes: React.FC = () => {
  const [landingPage, setLandingPage] = useState('')
  const { componentRights }: any = React.useContext(UserContext)

  useEffect(() => {
    setLandingPage(componentRights?.LANDING_PAGE?.props?.LANDING_PAGE)
  }, [componentRights?.LANDING_PAGE?.props?.LANDING_PAGE])

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route path='/kpi' component={Dashboard} />
        <Route path='/my-career' component={MyCareerPage} />
        <Route path='/my-resources' component={MyResourcesPage} />
        <Route path='/my-team' component={MyTeamPage} />
        <Route path='/my-toolbox' component={MyGeekToolbox} />
        <Route path='/sid-resource-planning' component={SIDResoucePlanningPage} />
        <Route path='/gsd-resource-model-definition' component={GSDResourcePlanningDefinitionPage} />
        <Route path='/timekeeping-in-percent' component={TimeSheetPage} />
        <Redirect from='/auth' to={landingPage} />
        <Route exact path='/'>
          <Redirect to={landingPage} />
        </Route>
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
