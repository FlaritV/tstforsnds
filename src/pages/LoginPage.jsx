import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { LoginFormContainer } from 'features/User';
import './style.css';

const LoginPage = ({ isAuthorized }) => {
  const { state } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (isAuthorized) {
      const link = state?.from || '/';
      history.replace(link);
    }
  }, [isAuthorized, state, history]);

  return (
    <div className='centered-page'>
      <LoginFormContainer />
    </div>
  );
};

export default LoginPage;
