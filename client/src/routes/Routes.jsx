import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from 'components/modules/HomePage'
import FormUser from 'components/modules/User/components/FormUser'
// import ListUser from 'components/modules/User/ListUser'
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/users">
        <FormUser />
        {/* <ListUser /> */}
      </Route>
      <Route exact path="/customers">
        <h1>Clientes</h1>
      </Route>
      <Route exact path="/roles">
        <h1>Roles</h1>
      </Route>
      <Route exact path="/configs">
        <h1>Configuración</h1>
      </Route>
      <Route exact path="/logout"></Route>
    </Switch>
  )
}

export default Routes
