import createSagaMiddleware from "@redux-saga/core";
import {
    createStore,
    applyMiddleware
} from "redux";
import logger from 'redux-logger';
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;