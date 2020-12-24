import {LOGIN} from "../action-types";

const initialState = {
    email: '',
    authenticated: false,
};

export const loginReducer = (state = initialState , action) => {
    switch (action.type) {
        case LOGIN: {
            const { payload: {emailInput, passwordInput} } = action;
            return {...state, email: emailInput, authenticated: true}
        }
        default: return state;
    }
};
