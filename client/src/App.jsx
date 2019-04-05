import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import RestrictedRoute from './HOCs/RestrictedRoute';
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
          <RestrictedRoute
            exact
            path="/users"
            redirectTo="/login"
            component={UsersView}
          />
        </Switch>
      </>
    );
  }
}

export default App;
