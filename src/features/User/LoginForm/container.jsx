import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'features/User/actions';
import { selectUser } from 'features/User/selectors';
import LoginForm from '.';
import { ContainerProps } from './props';

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const { submitting, failedResponse } = useSelector(selectUser);

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <LoginForm loading={submitting} onSubmit={onSubmit} fail={failedResponse} />
  );
};

LoginFormContainer.propTypes = ContainerProps;
export default memo(LoginFormContainer);
