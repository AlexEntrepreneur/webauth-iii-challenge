import React from 'react';

function LoginView(props) {
  return (
    <div className="view">
      <form>
        <input
          type="text"
          placeholder="username"
        />
        <input
          type="password"
          placeholder="password"
        />
      <button type="submit" className="primary">Log In</button>
      </form>
    </div>
  );
}

export default LoginView;
