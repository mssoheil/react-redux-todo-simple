import todoAppReducer from "./todoAppReducer/todoAppReducer";

import { combineReducers } from "redux";

const reducers = combineReducers({ todoAppReducer });

export default reducers;
