import { createStore, applyMiddleware } from "redux";

import initialState from "./initialState";

import logger from "redux-logger";

import reducers from "./reducers/index.js";

export default createStore(reducers, initialState, applyMiddleware(logger));
