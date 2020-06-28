import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { usePrepareLink } from 'hooks';
import { Props } from './props';

const AuthRoute = ({ children, isAuthorized, ...props }) => {
  const loginLink = usePrepareLink({
    to: '/login',
    isRelativePath: true,
  });

  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuthorized ? (
          children
        ) : (
          <Redirect
            to={{
              ...loginLink,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

AuthRoute.propTypes = Props;

export default AuthRoute;
