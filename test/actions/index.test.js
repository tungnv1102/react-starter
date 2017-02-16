import * as Actions from "../../app/actions";
import promiseMiddleware from "redux-promise-middleware";
import REDUX_THUNK from "redux-thunk";
import mockStore from "redux-mock-store";
import {fromJS} from "immutable";
import REDUX_PROMISE_AXIOS from "redux-promise-axios";
const REDUX_PROMISE = promiseMiddleware();
const MIDDLEWARES = [REDUX_THUNK, REDUX_PROMISE, REDUX_PROMISE_AXIOS];
describe("[ACTIONS]", () => {
  describe(Actions.DECREMENT, () => {
    it(Actions.DECREMENT, () => {
      let store = mockStore(MIDDLEWARES)({
        count: fromJS({
          value: 0
        })
      });
      store.dispatch({type: Actions.DECREMENT});
      expect(store.getActions()[0].type).toBe(Actions.DECREMENT);
    });
  });
  describe(Actions.INCREMENT, () => {
    it(`${Actions.INCREMENT}`, () => {
      let store = mockStore(MIDDLEWARES)({
        count: fromJS({
          value: 0
        })
      });

      store.dispatch({type: Actions.INCREMENT});
      expect(store.getActions()[0].type).toBe(Actions.INCREMENT);
    });
  });
});