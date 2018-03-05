import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD':
    return state + 1;
    case 'SUBTRACT':
    return state - 1;
    default:
    return state;

  }
};

const store = createStore(
   countReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


  ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>
    , document.getElementById('root'));
     registerServiceWorker();