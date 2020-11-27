import React, { Component } from "react";

import UserService from "../services/UserService";
import BookService from "../services/BookService"

export default class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      books: []
    };
  }

  componentDidMount() {
    UserService.getUserPage().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content: error.response.data.error
        });
      }
    );

    BookService.getAllBooks.then(
      response => {
        this.setState({
          books: response.data
        })
      }
    )
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <p>{this.state.books}</p>
        </header>
      </div>
    );
  }
}
