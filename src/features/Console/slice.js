import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import hash from 'object-hash';
import * as Api from 'api';
import { batch } from 'react-redux';

const HISTORY_LIMIT = 15;

export const historyAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date - a.date,
});

const slice = createSlice({
  name: 'history',
  initialState: historyAdapter.getInitialState(),
  reducers: {
    submittingStart(state) {
      state.submitting = true;
    },
    submittingEnd(state) {
      state.submitting = false;
    },
    resetPickedStory(state) {
      state.lastPickedStory = null;
    },
    pickStory(state, { payload }) {
      state.lastPickedStory = payload;
    },
    removeStory(state, { payload }) {
      if (state.lastPickedStory === payload) state.lastPickedStory = null;

      historyAdapter.removeOne(state, payload);
    },
    removeAllStories(state) {
      historyAdapter.setAll(state, []);
    },
    addStory(state, { payload }) {
      const id = hash(payload.body);
      const date = new Date().getTime();
      const story = {
        id,
        date,
        ...payload,
      };

      state.lastPickedStory = id;
      historyAdapter.upsertOne(state, story);

      //Check for limit
      const ids = state.ids;
      if (ids.length > 15) {
        historyAdapter.removeMany(state, ids.slice(HISTORY_LIMIT, ids.length));
      }
    },
  },
});

export const {
  addStory,
  removeStory,
  removeAllStories,
  submittingStart,
  submittingEnd,
  pickStory,
  resetPickedStory,
} = slice.actions;

export const createAndSendRequest = (jsonOrObj) => async (dispatch) => {
  const body =
    typeof jsonOrObj === 'string' ? JSON.parse(jsonOrObj) : jsonOrObj;
  dispatch(submittingStart());
  try {
    const response = await Api.sendRequest(body);

    batch(() => {
      dispatch(addStory({ response, body }));
      dispatch(submittingEnd());
    });
  } catch (error) {
    batch(() => {
      dispatch(addStory({ response: error, body, isFailedResponse: true }));
      dispatch(submittingEnd());
    });
  }
};

export default slice.reducer;
