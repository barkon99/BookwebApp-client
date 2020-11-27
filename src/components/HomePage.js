import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import '../App.css';

export default class HomePage extends Component {

  render() {
    return (
      <div className="container">
          <h3 className="h3-homepage">Welcome to Bookweb App</h3>
          <div class="alert alert-primary info" role="alert">
            Go to <Link to="/login" class="alert-link">login page </Link> to use the app.<br/>
            If you do not have account go to <Link to="/register" class="alert-link">register page </Link>
          </div>
      </div>
    );
  }
}