import Switch from "react-bootstrap/Switch";
import {LOGIN} from "../action-types";

const initialState = {
    email: '',
    authenticated: false,
};

export const loginReducer = (state = initialState , action) => {
    switch (action.type) {
        case LOGIN: {
            const { payload: {email} } = action;
            return {...state, email: email, authenticated: true}
        }
    }
};
