import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import AgileAfiniti from './components/AgileAfiniti'
import Sizing from './components//Sizing'
import ProductOwner from './components/ProductOwner'
import HeadEngineering from './components/HeadEngineering'
import SgLead from './components/SgLead'
import ScrumMaster from './components/ScrumMaster'
import ServiceLead from './components/ServiceLead'
import Developer from './components/Developer'
import Sdet from './components/Sdet'
import QA from './components/QA'
import EntArchitect from './components/EntArchitect'
import EngineeringPrinciples from './components/EngineeringPrinciples'

const MyResourcesPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/my-resources/agile-afiniti'>
          <AgileAfiniti />
        </Route>
        <Route path='/my-resources/sizing'>
          <Sizing />
        </Route> 
        <Route path='/my-resources/product-owner'>
          <ProductOwner />
        </Route>
        <Route path='/my-resources/head-engineering'>
          <HeadEngineering />
        </Route>
        <Route path='/my-resources/sg-lead'>
          <SgLead />
        </Route>
        <Route path='/my-resources/scrum-master'>
          <ScrumMaster />
        </Route>
        <Route path='/my-resources/servicelead'>
          <ServiceLead />
        </Route> 
        <Route path='/my-resources/developer'>
          <Developer />
        </Route>
        <Route path='/my-resources/sdet'>
          <Sdet />
        </Route>  
        <Route path='/my-resources/qa'>
          <QA />
        </Route>  
        <Route path='/my-resources/e-architect'>
          <EntArchitect />
        </Route> 
        <Route path='/my-resources/engineering-principles'>
          <EngineeringPrinciples />
        </Route> 
       <Redirect from='/my-resources' exact={true} to='/my-resources/agile-afiniti' />
        <Redirect to='/my-resources/agile-afiniti' />
      </Switch>
    </>
  )
}

export default MyResourcesPage
