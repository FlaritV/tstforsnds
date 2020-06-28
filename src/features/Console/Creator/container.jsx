import React, { useCallback, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestConsole from '.';
import { ContainerProps } from './props';
import { createAndSendRequest, resetPickedStory } from 'features/Console/slice';
import { getLastPickedStory, baseSelector } from 'features/Console/selectors';

const CreatorContainer = () => {
  const story = useSelector(getLastPickedStory);
  const { submitting } = useSelector(baseSelector);
  const dispatch = useDispatch();

  const onSend = useCallback(
    (body) => {
      dispatch(createAndSendRequest(body));
    },
    [dispatch]
  );

  useEffect(() => {
    return () => {
      dispatch(resetPickedStory());
    };
  });

  return (
    <RequestConsole
      onSend={onSend}
      request={story?.body}
      response={story?.response}
      isFetching={submitting}
      isFailedResponse={story?.isFailedResponse}
    />
  );
};

CreatorContainer.propTypes = ContainerProps;

export default memo(CreatorContainer);
