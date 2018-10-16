/*******************************************************
 * src/containers/Posts/index.js
 * 
 * Author: Jason Soltys
 *   Date: October 15, 2018
 * 
 */

import React, { Component } from 'react';

class Posts extends Component {
  render() {
    // Show only if loading posts.
    if ( this.props.loading ) {
      return(
        <div>Loading</div>
      ); // return
    };

    return (
      <div className="Posts">
        {this.props.posts.map(( posts ) => {
          return(
            <div>
              {posts.title}
            </div>
          );
        })}
      </div>
    ); // return className="Posts"
  }; // render
}; // App

export default Posts;
