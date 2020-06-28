import React, { memo } from 'react';
import IconButton from 'components/IconButton';
import HorizontalScroller from 'components/HorizontalScroller';
import { Close } from 'icons';
import Request from './Request';
import './style.css';
import { RootProps } from './props';

const History = ({ onRemove, onSend, onPick, clearAll, history }) => {
  return (
    <HorizontalScroller
      className='requests-history'
      affix={<IconButton icon={Close} onClick={clearAll} />}
    >
      {history.map((request, index) => (
        <Request
          key={request.id}
          {...request}
          onRemove={onRemove}
          onPick={onPick}
          onSend={onSend}
          isLast={index === history.length - 1}
        />
      ))}
    </HorizontalScroller>
  );
};

History.propTypes = RootProps;

export default memo(History);
