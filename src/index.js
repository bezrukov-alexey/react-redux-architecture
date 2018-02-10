import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { CountComponent } from './core/components/countComponent/countComponent'
import {store} from './store'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <CountComponent/>
  </Provider>,
  document.getElementById('root')
);
