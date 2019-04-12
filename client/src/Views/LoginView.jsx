import React from 'react';
import login from '../HelperFunctions/login';

function LoginView(props) {
  const onFormSubmit = (event) => {
    event.preventDefault();
    event.persist();

    const username = event.target['username_field'].value.toLowerCase();
    const password = event.target['password_field'].value;

    const loginForm = { username, password };
    const formIsFilled = !!(username && password);

    if (formIsFilled) {
      login(loginForm, props);
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
