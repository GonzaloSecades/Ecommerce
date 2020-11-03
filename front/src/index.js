// el inicio de la app
const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");
import store from "../redux/store"
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./containers/Main";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

console.log("gonza secades probando esta verga");
