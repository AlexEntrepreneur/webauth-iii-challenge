import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import HomeView from './Views/HomeView';
import RegisterView from './Views/RegisterView';
import LoginView from './Views/LoginView';
import UsersView from './Views/UsersView';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            {/*
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>*/}
          </nav>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            component={HomeView}
          />
          <Route
            exact
            path="/register"
            component={RegisterView}
          />
          <Route
            exact
            path="/login"
            component={LoginView}
          />
          <Route
            exact
            path="/users"
            component={UsersView}
          />
        </Switch>
      </>
    );
  }
}

export default App;
