import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ConfigureStore from './store/ConfigureStore';

import './public/index.css';
import App from './components/App';

ReactDOM.render(
  <Provider store={ConfigureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
