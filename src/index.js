import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/reducer";
import {
  saveToLocalStorage,
  loadFromLocalStorage
} from "./localStorage/sessionData";
import App from "./App";

require("dotenv").config();

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
