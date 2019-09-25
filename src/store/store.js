import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import words from "../reducers/wordsReducer";
import token from "../reducers/tokenReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    words,
    token,
});

export default function configureStore() {
  return createStore(reducers, applyMiddleware(logger, thunk));
};