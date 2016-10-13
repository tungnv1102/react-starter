import mockStore from "redux-mock-store";
import promiseMiddleware from "redux-promise-middleware";
import REDUX_THUNK from "redux-thunk";
const REDUX_PROMISE = promiseMiddleware();
export default mockStore([REDUX_THUNK], REDUX_PROMISE)({});