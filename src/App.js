import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Login from "./components/Login.js";
import './App.css';
import Profile from "./components/Profile";
import Register from "./components/Register";
import authService from "./services/authService";
import UserPage from "./components/UserPage.js";
import AdminPage from "./components/AdminPage.js";
import HomePage from "./components/HomePage.js";
import BooksPage from "./components/BooksPage.js";
import AddBook from "./components/AddBook.js";
import isAdmin from "./services/isAdmin"


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = authService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    authService.logout();
    
  }

  render() {
    const { currentUser } = this.state;

      return (
        <div className="App">
          <div  >

            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <Link to={"/"} className="navbar-brand bookweb">
                Bookweb
              </Link>



              {currentUser ? (
                <div className="navbar-nav ml-auto">

                  {isAdmin() && 
                    <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Book to accept
                    </Link>
                    </li>
                  }           

                  <li className="nav-item">
                    <Link to={"/books"} className="nav-link">
                      List of books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
                ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
                )}
            </nav>

              <Switch>
                <Route exact path="/login" component={Login} ></Route>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/register" component={Register} />
                <Route exact path={["/", "/home"]} component={HomePage} />
                <Route path="/user" component={UserPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path='/books' exact component={BooksPage}></Route>
                <Route path='/books/add-book/:id' component={AddBook}></Route>
              </Switch>
          </div>
          {/* <div className="image-div" style={{backgroundImage: "url('https://png.pngtree.com/png-vector/20190918/ourlarge/pngtree-open-book-3298621-png-image_1739935.jpg')"}}>
              
          </div> */}
        </div>
      );
  }
}

export default App;
