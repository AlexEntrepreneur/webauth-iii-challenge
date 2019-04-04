import React from 'react';
import axios from 'axios';

import { API_URL } from '../constants';

function LoginView(props) {
  const storeToken = (token) => {
    localStorage.setItem('token', token);
  }

  const login = (user) => {
    axios.post(`${API_URL}/login`, user)
      .then(res => {
        storeToken(res.data.token);
        props.history.push('/users');
      })
      .catch(err => {
        console.error(err.response.data.message);
      });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    event.persist();


    const username = event.target['username_field'].value.toLowerCase();
    const password = event.target['password_field'].value;
    const loginForm = { username, password };

    const formIsFilled = !!(username && password);
    if (formIsFilled) {
      login(loginForm);
    }
  }

  return (
    <div className="view">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username_field"
          required={true}
        />
        <input
          type="password"
          placeholder="password"
          name="password_field"
          required={true}
        />
      <button type="submit" className="primary">Log In</button>
      </form>
    </div>
  );
}

export default LoginView;
