import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from './store/store'

const mystore = createStore(store)

ReactDOM.render(
  <Provider store={mystore}>
      <App/>
  </Provider>,
  document.getElementById('app')
);
