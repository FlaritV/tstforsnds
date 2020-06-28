import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import user from 'features/User/slice';
import history from 'features/Console/slice';

const cachedStates = ['history.entities', 'history.ids'];

const middleware = [
  ...getDefaultMiddleware(),
  save({
    states: cachedStates,
  }),
];
const preloadedState = load({ states: cachedStates });

export default configureStore({
  reducer: {
    user,
    history,
  },
  middleware,
  preloadedState,
});
