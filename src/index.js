import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Form from './common/containers/Form'

import './index.css';

ReactDOM.render(
  // <Provider store={}>
  // </Provider>,
  <Form/>,
  document.getElementById('root')
);