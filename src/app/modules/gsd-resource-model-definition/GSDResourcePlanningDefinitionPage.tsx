import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ProductsLookup } from './components/ProductsLookup'
import { RevenueBracketsLookup } from './components/RevenueBracketsLookup'
import { RolesLookup } from './components/RolesLookup'


const GSDResourcePlanningDefinitionPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/gsd-resource-model-definition/products'>
          <ProductsLookup className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/gsd-resource-model-definition/roles'>
          <RolesLookup className='mb-5 mb-xl-8' />
        </Route>
        <Route path='/gsd-resource-model-definition/revenue-brackets'>
          <RevenueBracketsLookup className='mb-5 mb-xl-8' />
        </Route>
        <Redirect to='/gsd-resource-model-definition/products' />
      </Switch>
    </>
  )
}

export default GSDResourcePlanningDefinitionPage
