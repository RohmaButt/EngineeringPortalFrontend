import React, {useEffect} from 'react'
import {AsideDefault} from './components/aside/AsideDefault'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {useLocation} from 'react-router-dom'
import {
  DrawerMessenger,
  ExploreMain,
  ExploreKPI,
  ExploreMGT,
  ExploreMyCareer,
  ActivityDrawer,
  Main,
  InviteUsers,
  ExploreOKR,
  ExploreMyResources,
  UpgradePlan,
} from '../partials'
import {MenuComponent} from '../assets/ts/components'

const MasterLayout: React.FC = ({children}) => {
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])
  const {pathname} = location
  return (
    <PageDataProvider>
      <div className='page d-flex flex-row flex-column-fluid'>
        <AsideDefault />
        <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          <HeaderWrapper />
          {/* <div id='kt_content' className='content d-flex flex-column flex-column-fluid'> */}
          {/* <Toolbar /> */}
          <div className='post d-flex flex-column-fluid' id='kt_post'>
            <Content>{children}</Content>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* begin:: Drawers */}
      <ActivityDrawer />
      <ExploreMain />
      {pathname === '/kpi' && (
        <>
          <ExploreOKR />
          <ExploreKPI />
        </>
      )}

      {(pathname === '/my-resources/agile-afiniti' ||
        pathname === '/my-resources/sizing' ||
        pathname === '/my-resources/product-owner' ||
        pathname === '/my-resources/head-engineering' ||
        pathname === '/my-resources/engineering-principles' ||
        pathname === '/my-resources/scrum-master' ||
        pathname === '/my-resources/sg-lead' ||
        pathname === '/my-resources/servicelead' ||
        pathname === '/my-resources/developer' ||
        pathname === '/my-resources/sdet' ||
        pathname === '/my-resources/qa' ||
        pathname === '/my-resources/e-architect') && <ExploreMyResources />}

      {(pathname === '/my-career/core-competencies' ||
        pathname === '/my-career/career-framework' ||
        pathname === '/my-career/all-roles-engineering' ||
        pathname === '/my-career/all-roles-aidi' ||
        pathname === '/my-career/what-is-impact') && <ExploreMyCareer />}
      {(pathname === '/my-toolbox/api-portal' ||
        pathname === '/my-toolbox/relationship' ||
        pathname === '/my-toolbox/service-catalogue') && <ExploreMGT />}
      <DrawerMessenger />
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <Main />
      <InviteUsers />
      <UpgradePlan />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  )
}

export {MasterLayout}
