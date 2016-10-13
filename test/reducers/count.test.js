import * as Actions from "../../app/actions";
import count from "../../app/reducers/count";
import {fromJS} from "immutable";

describe("count", () => {
    it(`${Actions.INCREMENT_ACTION.TYPE}`, () => {
        let state = count(
            fromJS({
                value: 3
            }), {
                type: Actions.INCREMENT_ACTION.TYPE
            }
        );
        expect(state.get("value")).toBe(4);
    });
    it(`${Actions.DECREMENT_ACTION.TYPE}`, () => {
        let state = count(
            fromJS({
                value: 3
            }), {
                type: Actions.DECREMENT_ACTION.TYPE
            }
        );
        expect(state.get("value")).toBe(2);
    });
    it(`${Actions.GITHUB_USERS_HIEUNV.FULFILLED}`, () => {
        let state = count(
            fromJS({
                hieunv: null,
                value: 3
            }), {
                type: Actions.GITHUB_USERS_HIEUNV.FULFILLED,
                payload: {
                    uid: "hieunv"
                }
            }
        );
        expect(state.get("hieunv").uid).toBe("hieunv");
    });
});
