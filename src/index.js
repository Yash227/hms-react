import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { SLogin, PLogin } from "./components/Login/Loginform";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/hms-react/home" component={App} />
        <Route path="/hms-react/staff_login" component={SLogin} />
        <Route path="/hms-react/patient_login" component={PLogin} />
        <Redirect to="/hms-react/home" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
