import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App/App";

import loginStore, { persistor } from "./App/store/loginStore";

import "./index.css";

render((
    <Provider store={loginStore}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>
), document.getElementById("root"));