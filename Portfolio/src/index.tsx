import * as React from "react";
import * as ReactDOM from "react-dom";

import * as Main from "./component/Main";

const windowIfDefined = typeof window === undefined ? null : window as any;
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;

import * as redux from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Initialize Redux store
//const store = redux.createStore(
//    rootReducer,
//    composeEnhancers(redux.applyMiddleware(thunk))
//);
ReactDOM.render(
    <div>
        <Main />
    </div>,
    document.getElementById("content")
);