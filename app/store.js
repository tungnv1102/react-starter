/*global __DEV__ */
import {createStore, applyMiddleware, compose} from "redux";
import createLogger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import {routerMiddleware} from "react-router-redux";
import root from "./reducers";
import REDUX_THUNK from "redux-thunk";

const {hashHistory} = require("react-router");
const LOG = createLogger({
    level: "info",
    collapsed: true
});

const REDUX_ROUTER = routerMiddleware(hashHistory);

const REDUX_PROMISE = promiseMiddleware();

const store = createStore(root, {}, compose(
    __DEV__ ? applyMiddleware(REDUX_THUNK, REDUX_ROUTER, REDUX_PROMISE, LOG) : applyMiddleware(REDUX_THUNK, REDUX_ROUTER, REDUX_PROMISE),
    __DEV__ && window.devToolsExtension ? window.devToolsExtension({}) : noop => noop
));

if (__DEV__ && window.devToolsExtension) {
    window.devToolsExtension.updateStore(store);
}

export default store;