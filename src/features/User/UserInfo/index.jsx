import React, { memo } from 'react';
import classnames from 'classnames';
import IconButton from 'components/IconButton';
import { Text } from 'components/Typography';
import { Logout } from 'icons';
import './style.css';
import { RootProps } from './props';

const UserInfo = ({ className, account, sublogin, onLogout }) => {
  const classes = classnames('user-info', className);
  const user = `${account} ${sublogin && `:  ${sublogin}`}`;

  return (
    <div className={classes}>
      <div className='user-info__content'>
        <Text>{user}</Text>
      </div>
      <IconButton onClick={onLogout} placement='right' icon={Logout}>
        Выйти
      </IconButton>
    </div>
  );
};

UserInfo.propTypes = RootProps;

export default memo(UserInfo);
