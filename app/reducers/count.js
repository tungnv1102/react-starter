import * as Actions from "../actions";
import {fromJS} from "immutable";

export default function (state = fromJS({value: 0}), action) {
    switch (action.type) {
        case Actions.INCREMENT:
            return state.update("value", (v) => v + 1);
        case Actions.DECREMENT:
            return state.update("value", (v) => v - 1);
        default:
            return state;
    }
}