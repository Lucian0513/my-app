import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import FunctionCompent from '../views/compents/functionCompent'
import ClassCompent from '../views/compents/classCompent'
import FatherSonCompent from '../views/compents/fatherSonCompent'
import StateLife from '../views/compents/stateLife'

function Routes() {
    return (
        <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/functionCompent" component={FunctionCompent} />
          <Route path="/classCompent" component={ClassCompent} />
          <Route path="/fatherSonCompent" component={FatherSonCompent} />
          <Route path="/stateLife" component={StateLife} />
          <Redirect from="*" to="/home" />
        </Switch>
      </Router>
    )
}
export default <Routes/> // 导出<Routes/> 而不是Routes