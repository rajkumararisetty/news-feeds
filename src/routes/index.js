import React from 'react';
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import App from '../containers/App';
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';

const AppRoutes = () => (
  <BrowserRouter>
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
    </Switch>
    <Switch>
      <App>
        <Route exact path="/feeds" component={Dashboard} />
      </App>
    </Switch>
  </div>
  </BrowserRouter>
);

export default AppRoutes;
