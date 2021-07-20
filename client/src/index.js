import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App/App";

import loginStore from "./App/store/loginStore";

import "./index.css";

render((
    <Provider store={loginStore}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById("root"));