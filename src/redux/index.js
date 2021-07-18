import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import users from "./Users";
import modal from "./modal";
import { createLogger } from "redux-logger";

const logger = createLogger({
  diff: true,
  collapsed: true,
});
const rootReducer = combineReducers({
  users: users,
  modal: modal,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
