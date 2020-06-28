import React, { memo } from 'react';
import classnames from 'classnames';
import { Text } from 'components/Typography';
import { Props } from './props';
import './style.css';

const Tag = ({ className, children, affix, onClick }) => {
  return (
    <div className={classnames('c-tag', className)}>
      <button className='c-tag__interactive' onClick={onClick}>
        <Text>{children}</Text>
      </button>
      {affix && <div className='c-tag__affix'>{affix}</div>}
    </div>
  );
};

Tag.propTypes = Props;

export default memo(Tag);
