import React from 'react';
import register from '../HelperFunctions/register';
import login from '../HelperFunctions/login';

function RegisterView(props) {
  const onFormSubmit = (event) => {
    event.preventDefault();
    event.persist();

    const username = event.target['username_field'].value.toLowerCase();
    const department = event.target['department_field'].value.toLowerCase();
    const password = event.target['password_field'].value;

    const loginForm = { username, password };
    const registerForm = { ...loginForm, department };
    const formIsFilled = !!(username && password && department);

    if (formIsFilled) {
      register(registerForm)
        .then(success => {
          login(loginForm, props);
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  }

  return (
    <div className="view">
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username_field"
        />
        <select
          name="department_field"
        >
          <option>Student</option>
          <option>Project Manager</option>
          <option>Section Lead</option>
          <option>Instructor</option>
        </select>
        <input
          type="password"
          placeholder="password"
          name="password_field"
        />
      <button type="submit" className="primary">Register</button>
      </form>
    </div>
  );
}

export default RegisterView;
