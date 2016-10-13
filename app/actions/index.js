import jQuery from "jquery";

export const INCREMENT_ACTION = (dispatch, getState) => {
    if (getState().count.get("value") === 10) {
        dispatch(GITHUB_USERS_HIEUNV);
    }
    return dispatch({
        type: INCREMENT_ACTION.TYPE
    });
};

INCREMENT_ACTION.TYPE = "INCREMENT";

export const DECREMENT_ACTION = (dispatch) => {
    return dispatch({
        type: DECREMENT_ACTION.TYPE
    });
};

DECREMENT_ACTION.TYPE = "DECREMENT";

export const GITHUB_USERS_HIEUNV = (dispatch, getState) => {
    return dispatch({
        type: GITHUB_USERS_HIEUNV.TYPE,
        payload: new Promise((resolve, reject) => {
            jQuery.ajax({
                url: "https://api.github.com/users/hieunv8",
                method: "GET",
                async: false
            }).done((obj) => resolve(obj)).fail(() => reject());
        })
    });
};
GITHUB_USERS_HIEUNV.TYPE = "GITHUB_USERS_HIEUNV";
GITHUB_USERS_HIEUNV.PENDING = "GITHUB_USERS_HIEUNV_PENDING";
GITHUB_USERS_HIEUNV.FULFILLED = "GITHUB_USERS_HIEUNV_FULFILLED";
GITHUB_USERS_HIEUNV.REJECTED = "GITHUB_USERS_HIEUNV_REJECTED";
