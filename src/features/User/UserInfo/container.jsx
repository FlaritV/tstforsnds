import React, { memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogout } from 'features/User/actions';
import { selectUser } from 'features/User/selectors';
import UserInfo from '.';
import { ContainerProps } from './props';

const UserInfoContainer = () => {
  const { account, sublogin } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(fetchLogout());
  }, [dispatch]);

  return <UserInfo account={account} sublogin={sublogin} onLogout={onLogout} />;
};

UserInfoContainer.propTypes = ContainerProps;
export default memo(UserInfoContainer);
