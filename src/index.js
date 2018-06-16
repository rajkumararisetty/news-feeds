import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import './public/index.css';
import AppRoutes from './routes';

const store = ConfigureStore()
ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
