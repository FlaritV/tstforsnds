import React from 'react';
import classnames from 'classnames';
import { Text } from 'components/Typography';
import { Props } from './props';
import { Meh } from 'icons';
import './style.css';

const DefaultIconsTypes = {
  error: <Meh />,
};

const Alert = ({ title, description, type = 'error', className }) => {
  const getIcon = (type) => DefaultIconsTypes[type] || null;
  const classes = classnames('c-alert', `c-alert--type--${type}`, className);

  return (
    <div className={classes}>
      <div className='c-alert__icon'>{getIcon(type)}</div>
      <div className='c-alert__content'>
        <Text className='c-alert__title' size='500'>
          {title}
        </Text>
        {description && (
          <Text className='c-alert__description' size='200'>
            {description}
          </Text>
        )}
      </div>
    </div>
  );
};

Alert.propTypes = Props;

export default Alert;
