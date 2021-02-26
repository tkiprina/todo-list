import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import 'normalize.css';
import './index.css';

import App from './components/app/app';

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
  , document.getElementById('root')
);


