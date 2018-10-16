/*******************************************************
 * src/containers/AddPost/index.js
 *
 * Author: Jason Soltys
 *   Date: October 15, 2018
 *
 */

import React, { Component } from "react";

class AddPost extends Component {

  // This is a function that is called by ReactDOM.render() and basically
  // acts like a template.
  render() {
    if (this.props.loading) {
      return(
        <div>Loading</div>
      ); // return
    };

    return (
      <div className="Posts">
        {this.props.posts.map(posts => {
          return(
            <div>{posts.title}</div>
          );
        })}
      </div>
    ); // return className="Posts"
  }; // render
}; // App

// Makes the class available for import into other files.
export default AddPost;
