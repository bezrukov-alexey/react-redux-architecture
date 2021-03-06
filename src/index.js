import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import rootReducer from './containers/reducers';
import MainPage from './pages/mainPage/mainPage';
import SecondPage from './pages/secondPage/secondPage';
import BasketPage from './pages/basketPage/basketPage';
import Basket from './containers/basket/smallBasket/smallBasketContainer'

import './index.css';

let store = createStore(
  rootReducer,
  (window).__REDUX_DEVTOOLS_EXTENSION__ && (window).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
   <Provider store={store}>
    <Router>
      <div>
        <div>Hello</div>
        <Link to="/">Main Page</Link>
        <Link to="/SecondPage">Second Page</Link>
        <br/>
        <Basket/>
        <hr/>

        <Route exact path="/" component={MainPage}/>
        <Route path="/SecondPage" component={SecondPage}/>
        <Route path="/BasketPage" component={BasketPage}/>
      </div>
    </Router>
   </Provider>,
  document.getElementById('root')
);