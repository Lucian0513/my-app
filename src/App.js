import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './views/Home/Home'
import Login from './views/Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/home" />
      </Switch>
    </Router>
  )
}

export default App
