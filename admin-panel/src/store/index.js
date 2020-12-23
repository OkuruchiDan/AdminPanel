
import { createStore , applyMiddleware } from "redux";
import {loginReducer} from "../reducer/loginReducer";
import thunk from 'redux-thunk';

export const store = createStore(loginReducer , applyMiddleware(thunk));