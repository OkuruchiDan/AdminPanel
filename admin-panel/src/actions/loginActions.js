import {LOGIN} from "../action-types";

export const login = ({email, password }) => {
    return dispatch => {
        dispatch({type: LOGIN, payload: email});
    }
}