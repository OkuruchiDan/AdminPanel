import {LOGIN} from "../action-types";

export const login = (payload) => {
    console.log(payload, "actiopmla")
    return dispatch => {
        dispatch({type: LOGIN, payload: payload});
    }
}