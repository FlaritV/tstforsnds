import React, { useState, useCallback, useEffect, memo } from 'react';
import classnames from 'classnames';
import Tag from 'components/Tag';
import Badge from 'components/Badge';
import Dropdown from 'components/Dropdown';
import IconButton from 'components/IconButton';
import { Dots } from 'icons';
import { useCopyClipboard } from 'hooks';
import Overlay from './Overlay';
import { getPrettyJson } from '../helpers';
import { RequestProp } from './props';

const Request = ({
  id,
  body,
  isFailedResponse,
  onRemove,
  onPick,
  onSend,
  isLast,
}) => {
  const [active, setActive] = useState(false);
  const [copyNotify, setCopyNotify] = useState(false);
  const onVisibleChange = (isVisible) => {
    setActive(isVisible);
  };

  const [isCopied, copyClipboard] = useCopyClipboard(getPrettyJson(body), {
    successDuration: 1,
  });

  const remove = useCallback(() => onRemove(id), [id, onRemove]);
  const pick = useCallback(() => onPick(id), [id, onPick]);
  const send = useCallback(() => onSend(body), [body, onSend]);
  const copy = useCallback(() => {
    setCopyNotify(false);
    copyClipboard();
  }, [setCopyNotify, copyClipboard]);

  const actionsHandler = useCallback(
    (value) => {
      const actions = {
        send,
        copy,
        remove,
      };

      if (actions[value]) {
        actions[value]();
      }
    },
    [send, copy, remove]
  );

  useEffect(() => {
    if (isCopied) {
      setCopyNotify(true);
      const id = setTimeout(() => {
        setCopyNotify(false);
      }, 1500);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isCopied, setCopyNotify]);

  const classes = classnames('requests-history-item', {
    'requests-history-item--is-active': active,
    'requests-history-item--is-last': isLast,
  });

  const nameClasses = classnames('request-history-item__name', {
    'request-history-item__name--copied': copyNotify,
  });

  const status = isFailedResponse ? 'error' : 'success';

  return (
    <Tag
      className={classes}
      onClick={pick}
      affix={
        <Dropdown
          onVisibleChange={onVisibleChange}
          overlay={<Overlay onClick={actionsHandler} />}
        >
          <IconButton icon={Dots} className='request-history-item__actions' />
        </Dropdown>
      }
    >
      <Badge type={status} className='request-history-item__status' />
      <div className={nameClasses}>{body.action || 'null'}</div>
    </Tag>
  );
};

Request.propTypes = RequestProp;
export default memo(Request);
