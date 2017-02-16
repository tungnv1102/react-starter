import mockStore from "redux-mock-store";
import promiseMiddleware from "redux-promise-middleware";
import REDUX_THUNK from "redux-thunk";
const REDUX_PROMISE = promiseMiddleware();
import REDUX_PROMISE_AXIOS from "redux-promise-axios";
export default mockStore([REDUX_THUNK], REDUX_PROMISE, REDUX_PROMISE_AXIOS)({});