import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import countReducers from './core/components/countComponent/reducers'

import './index.css';

let store = createStore(countReducers)

ReactDOM.render(
   <Provider store={store}>
      <Form/>
   </Provider>,
  document.getElementById('root')
);