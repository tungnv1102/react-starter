/* global __DEV__ */
import {createStore, applyMiddleware, compose} from 'redux'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import {routerMiddleware} from 'react-router-redux'
import root from './reducers'
import REDUX_THUNK from 'redux-thunk'
import REDUX_PROMISE_AXIOS from 'redux-promise-axios'
import {hashHistory} from 'react-router'

const LOG = createLogger({
  level: 'info',
  collapsed: true
})

const REDUX_ROUTER = routerMiddleware(hashHistory)

const REDUX_PROMISE = promiseMiddleware()
const {__REDUX_DEVTOOLS_EXTENSION_COMPOSE__} = window
const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(root, {}, composeEnhancers(
  __DEV__ ? applyMiddleware(REDUX_THUNK, REDUX_ROUTER, REDUX_PROMISE, REDUX_PROMISE_AXIOS, LOG) : applyMiddleware(REDUX_THUNK, REDUX_ROUTER, REDUX_PROMISE, REDUX_PROMISE_AXIOS),
))

export default store
