import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ConfigureStore from './store/ConfigureStore';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ConfigureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
