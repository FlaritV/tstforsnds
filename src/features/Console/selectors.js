import { historyAdapter } from './slice';

export const baseSelector = (state) => state.history;

export const historySelectors = historyAdapter.getSelectors(baseSelector);

export const getStories = (state) => ({
  history: historySelectors.selectAll(state),
});

export const getLastPickedStory = (state) => {
  const storyId = state.history.lastPickedStory;

  if (!storyId) return null;
  return historySelectors.selectById(state, storyId);
};
