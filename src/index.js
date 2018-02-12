import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import countReducers from './containers/countContainers/reducers';
import MainPage from './pages/mainPage/mainPage';
import SecondPage from './pages/secondPage/secondPage';

import './index.css';

let store = createStore(countReducers);

ReactDOM.render(
   <Provider store={store}>
    <Router>
      <div>
        <div>Hello</div>
        <Link to="/">Main Page</Link>
        <Link to="/SecondPage">Second Page</Link>
        <hr/>

        <Route exact path="/" component={MainPage}/>
        <Route path="/SecondPage" component={SecondPage}/>
      </div>
    </Router>
   </Provider>,
  document.getElementById('root')
);