import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import fuck from "./fuckReducer";

const rootReducer = combineReducers({ homeReducer, fuck });
export default rootReducer;
