/*******************************************************
 * src/containers/App/index.js
 *
 * Author: Jason Soltys
 *   Date: October 8, 2018
 *
 */

import React, { Component } from "react";
import * as firebase from "firebase";
import config from "./firebase-config";

class App extends Component {
  // This method is only called one time, which is before the initial render.
  componentWillMount() {
    let postsRef = firebase.database().ref("posts");
    let _this = this;

    postsRef.on("value", function(snapshot) {
      console.log(snapshot.val);

      _this.setState({
        post: snapshot.val(),
        loading: false
      }); // _this.setState
    }); // postsRef.on
  } // componentWillMount

  // This is called when an instance of an object is created.
  constructor() {
    // super() calls the constructor of the Component class.
    super();

    // Set variables for the initial state of this app.
    this.state = {
      posts: [],
      loading: false
    };

    /***************************************************************************
     * This helps suppresses the following error
     * Firebase: Firebase App named '[DEFAULT]' already exists
     *
     * Initializes Firebase
     */
    try {
      firebase.initializeApp(config);
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
      }
    } // try/catch
  } // constructor

  // This is a function that is called by ReactDOM.render() which basically
  // acts like a template.
  render() {
    return (
      <div className="App">
        {this.props.children &&
          React.cloneElement(this.props.children, {
            firebaseRef: firebase.database().ref("posts"),
            posts: this.state.posts,
            loading: this.state.loading
          })}
        Hello World!
      </div>
    ); // return
  } // render
} // App

// Makes the class available for import into other files.
export default App;
