import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RestrictedRoute({
  isAuthed,
  component: Component,
  render: RenderedComponent,
  redirectTo
}) {
  // Temporary: should come from props upstream as a result of auth check
  isAuthed = !!localStorage.getItem('token');
  return (
    <Route
      render={(props) => {
        if (isAuthed) {
          // Compatibility with both Route render or Route component
          if (!!RenderedComponent) {
            return RenderedComponent();
          }
          return <Component {...props} />
        }

        return <Redirect to={redirectTo} />;
      }}
    />
  );
}
