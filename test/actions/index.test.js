import jajax from "jasmine-ajax";
import * as Actions from "../../app/actions";
import promiseMiddleware from "redux-promise-middleware";
import REDUX_THUNK from "redux-thunk";
import mockStore from "redux-mock-store";
import {fromJS} from "immutable";
const REDUX_PROMISE = promiseMiddleware();

describe("[ACTIONS]", () => {
    describe(Actions.DECREMENT_ACTION.TYPE, () => {
        it(Actions.DECREMENT_ACTION.TYPE, () => {
            let store = mockStore([REDUX_THUNK])({
                count: fromJS({
                    value: 0
                })
            });
            store.dispatch(Actions.DECREMENT_ACTION);
            expect(store.getActions()[0].type).toBe(Actions.DECREMENT_ACTION.TYPE);
        });
    });
    describe(Actions.INCREMENT_ACTION.TYPE, () => {
        it(`${Actions.INCREMENT_ACTION.TYPE} without ${Actions.GITHUB_USERS_HIEUNV.TYPE}`, () => {
            let store = mockStore([REDUX_THUNK])({
                count: fromJS({
                    value: 0
                })
            });

            store.dispatch(Actions.INCREMENT_ACTION);
            expect(store.getActions()[0].type).toBe(Actions.INCREMENT_ACTION.TYPE);
        });
        it(`${Actions.INCREMENT_ACTION.TYPE} with ${Actions.GITHUB_USERS_HIEUNV.TYPE}`, (done) => {
            jasmine.Ajax.install();
            jasmine.Ajax.stubRequest("https://api.github.com/users/hieunv8", null, "GET").andReturn({
                status: 200,
                statusText: "HTTP/1.1 200 OK",
                contentType: "application/json",
                responseText: "{}"
            });

            let store = mockStore([REDUX_THUNK, REDUX_PROMISE])({
                count: fromJS({
                    value: 10
                })
            });
            store.dispatch(Actions.INCREMENT_ACTION);
            setTimeout(() => {
                expect(store.getActions()[0].type).toBe(Actions.GITHUB_USERS_HIEUNV.PENDING);
                expect(store.getActions()[1].type).toBe(Actions.INCREMENT_ACTION.TYPE);
                expect(store.getActions()[2].type).toBe(Actions.GITHUB_USERS_HIEUNV.FULFILLED);
                done();
            }, 1000);

        });
        it(`${Actions.GITHUB_USERS_HIEUNV.TYPE}`, (done) => {
            jasmine.Ajax.stubRequest("https://api.github.com/users/hieunv8", null, "GET").andReturn({
                status: 500,
            });

            let store = mockStore([REDUX_THUNK, REDUX_PROMISE])({
                count: fromJS({
                    value: 10
                })
            });
            store.dispatch(Actions.INCREMENT_ACTION);
            setTimeout(() => {
                expect(store.getActions()[0].type).toBe(Actions.GITHUB_USERS_HIEUNV.PENDING);
                expect(store.getActions()[1].type).toBe(Actions.INCREMENT_ACTION.TYPE);
                expect(store.getActions()[2].type).toBe(Actions.GITHUB_USERS_HIEUNV.REJECTED);
                done();
            }, 1000);
        });
    });
});