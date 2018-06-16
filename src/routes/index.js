import React from 'react';
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from '../containers/App';
import Login from '../containers/Login';
import NotFoundPage from '../containers/NotFoundPage';

const AppRoutes = () => (
  <BrowserRouter>
    <div>
      <App>
        <Route path="/feeds" component={NotFoundPage} />
      </App>
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

export default AppRoutes;
