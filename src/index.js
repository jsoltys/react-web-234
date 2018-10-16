/*******************************************************
 * src/index.js
 *
 * Author: Jason Soltys
 *   Date: October 8, 2018
 *
 */

import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";

import Routes from "./routes";
import registerServiceWorker from "./utils/registerServiceWorker";

//import App from './containers/App';
//import "./styles.css";

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById("root")
);

registerServiceWorker();
