import React from 'react';
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from '../containers/App';
import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <App>
        <Route exact path="/feeds" component={Dashboard} />
      </App>
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

export default AppRoutes;
