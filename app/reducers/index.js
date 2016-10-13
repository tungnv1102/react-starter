import {combineReducers} from "redux";
import count from "./count";

const routing = require("react-router-redux").routerReducer;

export default combineReducers({
    count,
    routing,
});