import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { init } from 'features/User/actions';
import { selectUser } from 'features/User/selectors';
import AuthRoute from 'components/AuthRoute';
import Spin from 'components/Spin';
import ConsolePage from 'pages/ConsolePage';
import LoginPage from 'pages/LoginPage';
import NotFoundPage from 'pages/NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { account, isFetching } = useSelector(selectUser);

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  if (isFetching) return <Spin isGlobal />;

  const isAuthorized = Boolean(account);

  return (
    <>
      <Switch>
        <AuthRoute isAuthorized={isAuthorized} path='/' exact>
          <ConsolePage />
        </AuthRoute>
        <Route path='/login'>
          <LoginPage isAuthorized={isAuthorized} />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
};

export default App;
