import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { I18nProvider } from '../_metronic/i18n/i18nProvider'
import { LayoutProvider, LayoutSplashScreen } from '../_metronic/layout/core'
import track from "react-tracking";
import AuthInit from './modules/auth/redux/AuthInit'
import { Routes } from './routing/Routes'
import { UserContextProvider } from './modules/context/UserContext'
import { logDomActivity } from './routing/RouteLogger';

const { PUBLIC_URL } = process.env

const App: React.FC = () => {
  (window as any).global = window;
  // @ts-ignore
  window.Buffer = window.Buffer || require('buffer').Buffer;
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <UserContextProvider>
        <BrowserRouter basename={PUBLIC_URL}>
          <I18nProvider>
            <LayoutProvider>
              <AuthInit>
                <Routes />
              </AuthInit>
            </LayoutProvider>
          </I18nProvider>
        </BrowserRouter>
      </UserContextProvider>
    </Suspense>
  )
}

// tracker for my app
const TrackedApp = track(
  // app-level tracking data
  { app: "my-app" },

  // top-level options
  {
    // custom dispatch to console.log in addition to pushing to dataLayer[]
    dispatch: (data: any) => {
      logDomActivity(data)
    }
  }
)(App);
export { TrackedApp }
