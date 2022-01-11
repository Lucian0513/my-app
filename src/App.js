import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import FunctionCompent from './views/compents/functionCompent'
import ClassCompent from './views/compents/classCompent'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/functionCompent" component={FunctionCompent} />
        <Route path="/classCompent" component={ClassCompent} />
        <Redirect from="*" to="/home" />
      </Switch>
    </Router>
  )
}

export default App
