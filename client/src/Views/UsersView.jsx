import React, { useState, useEffect } from 'react';
import getUsers from '../HelperFunctions/getUsers';

function UsersView(props) {
  const [users, updateUsersState] = useState([]);

  useEffect(() => {
    getUsers(updateUsersState, console.error);
  }, []);

  return (
    <div className="view">
      <h2>Users</h2>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              {user.username}
              &nbsp;-&nbsp;
              {user.department}
            </div>
          )
        })
      }
    </div>
  )
}

export default UsersView;
