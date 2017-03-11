/* global __DEV__ */
import {createStore, applyMiddleware, compose} from 'redux'
import createLogger from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import root from './reducers'
import {browserHistory} from 'react-router'
import sagaMiddlewareFactory from 'redux-saga'
import {fork} from 'redux-saga/effects'
import Actions from './actions'
const LOG = createLogger({
  level: 'info',
  collapsed: true
})

const REDUX_ROUTER = routerMiddleware(browserHistory)
const REDUX_SAGA = sagaMiddlewareFactory()
const {__REDUX_DEVTOOLS_EXTENSION_COMPOSE__} = window
const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(root, {}, composeEnhancers(
  __DEV__ ? applyMiddleware(
      REDUX_ROUTER,
      REDUX_SAGA,
      LOG
    ) : applyMiddleware(
      REDUX_ROUTER,
      REDUX_SAGA
    )
))
REDUX_SAGA.run(function* () {
  yield [
    fork(Actions)
  ]
})
export default store
