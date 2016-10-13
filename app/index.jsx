import React from "react";
import ReactDOM from "react-dom";
import routes from "./routes";
import store from "./store";
import "./index.scss";

const {Provider} = require("react-redux");

const {Router, hashHistory} = require("react-router");

const {syncHistoryWithStore} = require("react-router-redux");

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById("root")
);
