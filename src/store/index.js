import { createStore , applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "../sagas/saga";
import rootReducer from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(saga);

export default store;