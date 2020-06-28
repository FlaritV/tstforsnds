import React, { useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import History from '.';
import {
  removeStory,
  pickStory,
  createAndSendRequest,
  removeAllStories,
} from 'features/Console/slice';
import { getStories } from 'features/Console/selectors';
import { ContainerProps } from './props';

const HistoryContainer = () => {
  const { history } = useSelector(getStories);
  const dispatch = useDispatch();

  const onRemove = useCallback(
    (id) => {
      dispatch(removeStory(id));
    },
    [dispatch]
  );

  const onSend = useCallback(
    (body) => {
      dispatch(createAndSendRequest(body));
    },
    [dispatch]
  );

  const onPick = useCallback(
    (id) => {
      dispatch(pickStory(id));
    },
    [dispatch]
  );

  const clearAll = useCallback(() => {
    dispatch(removeAllStories());
  }, [dispatch]);

  return (
    <History
      clearAll={clearAll}
      history={history}
      onPick={onPick}
      onSend={onSend}
      onRemove={onRemove}
    />
  );
};

HistoryContainer.propTypes = ContainerProps;

export default memo(HistoryContainer);
