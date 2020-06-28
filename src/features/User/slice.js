import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: true,
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchingStart: (state) => {
      state.isFetching = true;
    },
    fetchingEnd: (state) => {
      state.isFetching = false;
    },
    loginStart: (state) => {
      state.submitting = true;
    },
    loginEnd: (state) => {
      state.submitting = false;
    },
    getUserSuccess: (state, { payload }) => {
      const { sublogin, account } = payload;

      state.sublogin = sublogin;
      state.account = account;
    },
    loginFailed: (state, { payload }) => {
      state.failedResponse = payload;
    },
    logout: () => initialState,
  },
});

export const {
  fetchingStart,
  fetchingEnd,
  getUserSuccess,
  logout,
  loginStart,
  loginEnd,
  loginFailed,
} = slice.actions;

export default slice.reducer;
