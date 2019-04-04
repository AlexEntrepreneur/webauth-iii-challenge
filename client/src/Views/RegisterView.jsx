import React from 'react';

function RegisterView(props) {
  return (
    <div className="view">
      <form>
        <input
          type="text"
          placeholder="username"
        />
        <select>
          <option>Student</option>
          <option>PM</option>
          <option>Instructor</option>
        </select>
        <input
          type="password"
          placeholder="password"
        />
      <button type="submit" className="primary">Register</button>
      </form>
    </div>
  );
}

export default RegisterView;
