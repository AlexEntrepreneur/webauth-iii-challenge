import React from 'react';
import { Link } from 'react-router-dom';

function HomeView(props) {
  return (
    <div className="view">
      <Link to="/register">
        <button className="primary">Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default HomeView;
