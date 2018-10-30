import * as React from "react";
import * as ReactDOM from "react-dom";
import * as redux from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import  Main from "./component/Main";

const composeEnhancers =  redux.compose;

const store = redux.createStore(
    rootReducer,
    composeEnhancers(redux.applyMiddleware(thunk))
);
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("content")
);