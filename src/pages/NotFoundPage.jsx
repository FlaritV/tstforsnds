import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import './style.css';

const NotFoundPage = () => {
  return (
    <div className='not-found centered-page'>
      <span className='not-found__code'>404</span>
      <Link to='/'>
        <Button>На главную</Button>
      </Link>
    </div>
  );
};

export default memo(NotFoundPage);
