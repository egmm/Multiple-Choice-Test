import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import allReducers from './reducers';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
