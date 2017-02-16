import {combineReducers} from "redux";
import count from "./count";
import {routerReducer as routing} from "react-router-redux";

export default combineReducers({
  count,
  routing,
});