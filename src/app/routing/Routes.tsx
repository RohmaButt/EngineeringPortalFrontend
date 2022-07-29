/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { FC, useEffect } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import { PrivateRoutes } from './PrivateRoutes'
import { Logout, AuthPage } from '../modules/auth'
import { ErrorsPage } from '../modules/errors/ErrorsPage'
import { MasterInit } from '../../_metronic/layout/MasterInit';
import { UserContext } from '../modules/context/UserContext'
import { logRoutes } from './RouteLogger'
import { useLocation } from 'react-router-dom'
const Routes: FC = () => {
  let { pathname } = useLocation();
  useEffect(() => {
    logRoutes(pathname)
  }, [pathname])
  const { componentRights }: any = React.useContext(UserContext);
  const isAuthorized = componentRights !== null;
  return (
    <>
      <Switch>
        {!isAuthorized ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <Route>
            <AuthPage />
          </Route>
        ) : (
          /*Otherwise redirect to root page (`/`)*/
          <Redirect from='/auth' to='/' />
        )}

        <Route path='/error' component={ErrorsPage} />
        <Route path='/logout' component={Logout} />

        {!isAuthorized ? (
          /*Redirect to `/auth` when user is not authorized*/
          <Redirect to='/auth/login' />
        ) : (
          <>
            <MasterLayout>
              <PrivateRoutes />
            </MasterLayout>
          </>
        )}
      </Switch>
      <MasterInit />
    </>
  )
}

export { Routes }
