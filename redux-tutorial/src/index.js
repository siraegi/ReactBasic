import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';

import {Provider} from "react-redux";
import {store} from "./redux/store";
import {updateUser} from "./redux/actions";

store.dispatch(updateUser('Jane'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

/*const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store, store.getState());

const action = {
  type: 'changeState',
  payload: {
    newState: 'New State'
  }
}

const updateUser = {
  type: 'updateUser',
  payload: {
    user: 'Tom'
  }
}

console.log('--------------------');

store.dispatch(action);

store.subscribe(() => console.log(store.getState()));

store.dispatch(updateUser);


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}><App></App></Provider>,
  document.getElementById('root')
);*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

