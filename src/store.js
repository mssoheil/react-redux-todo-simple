import { createStore, applyMiddleware } from "react-redux";

import initialState from "./initialState";

import logger from "redux-logger";

export default createStore(reducers, initialState, applyMiddleware(logger));
