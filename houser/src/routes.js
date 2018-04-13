import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard1 from './components/Wizard/Wizard1/Wizard1'
import Wizard2 from './components/Wizard/Wizard2/Wizard2'
import Wizard3 from './components/Wizard/Wizard3/Wizard3'


export default (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/wizard1' component={Wizard1}/>
    <Route path='/wizard2' component={Wizard2}/>
    <Route path='/wizard3' component={Wizard3}/>
  </Switch>
)