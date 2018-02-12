import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import countReducers from './containers/countContainers/reducers'
import MainPage from './pages/mainPage/mainPage';

import './index.css';

let store = createStore(countReducers)

ReactDOM.render(
   <Provider store={store}>
    <MainPage/>
   </Provider>,
  document.getElementById('root')
);