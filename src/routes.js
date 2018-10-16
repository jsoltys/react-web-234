/*******************************************************
 * src/routes.js
 *
 * Author: Jason Soltys
 *   Date: October 8, 2018
 *
 */

import React from "react";
import { Router, Route } from "react-router";

import App from "./containers/App";
import Posts from "./containers/Posts";

// Routes const is a variabe that is locked from being modified.
const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/posts" component={Posts} />
    </Route>
  </Router>
);

// Makes the variable Routes available for import into other files.
export default Routes;
