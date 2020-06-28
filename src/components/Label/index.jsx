import React from 'react';
import classnames from 'classnames';
import { Props } from './props';
import { Text } from 'components/Typography';
import './style.css';

const Label = ({ title, className, children, sub }) => {
  const classes = classnames('c-label', className);
  return (
    <label className={classes}>
      <div className='c-label__title'>
        <Text>{title}</Text>
        {sub && (
          <Text size='200' type='mute'>
            {sub}
          </Text>
        )}
      </div>
      {children}
    </label>
  );
};

Label.propTypes = Props;

export default Label;
