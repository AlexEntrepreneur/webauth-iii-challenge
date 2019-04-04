import React from 'react';

function UsersView(props) {
  return (
    <div className="view">
      <h2>Users</h2>
      {
        [].map(user => {
          return (
            <div>{user.username}</div>
          )
        })
      }
    </div>
  )
}

export default UsersView;
