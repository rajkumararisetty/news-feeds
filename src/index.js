import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import './public/index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReduxToastr from 'react-redux-toastr'
import AppRoutes from './routes';

const store = ConfigureStore()
ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <AppRoutes />
      <ReduxToastr
       timeOut={2000}
       newestOnTop={false}
       preventDuplicates
       position="top-right"
       transitionIn="fadeIn"
       transitionOut="fadeOut"
       progressBar/>
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);
