import * as Actions from "../actions";
import {fromJS} from "immutable";

export default function (state = fromJS({hieunv: null, value: 0}), action) {
    switch (action.type) {
        case Actions.INCREMENT_ACTION.TYPE:
            return state.update("value", (v) => v + 1);
        case Actions.DECREMENT_ACTION.TYPE:
            if (state.get("value") <= 10) {
                state = state.update("hieunv", (v) => null);
            }
            return state.update("value", (v) => v - 1);
        // case Actions.GITHUB_USERS_HIEUNV.PENDING:
        //     return state;
        case Actions.GITHUB_USERS_HIEUNV.FULFILLED:
            return state.update("hieunv", (v) => fromJS(action.payload));
        // case Actions.GITHUB_USERS_HIEUNV.REJECTED:
        //     return state;
        default:
            return state;
    }
}