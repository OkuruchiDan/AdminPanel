const {loginReducer} = require("./loginReducer");
const {productReducer} = require("./productReducer");
const {combineReducers} = require("redux");

export const rootReducer = combineReducers({
    productReducer,
    loginReducer,
})