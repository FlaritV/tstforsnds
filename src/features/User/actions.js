import * as Service from 'api';
import { toast } from 'react-toastify';
import Cookie from 'js-cookie';
import {
  fetchingStart,
  fetchingEnd,
  getUserSuccess,
  logout,
  loginFailed,
  loginStart,
  loginEnd,
} from './slice';
import { batch } from 'react-redux';
import { getPrettyJson } from 'features/Console/helpers';

const COOKIE_KEY = 'sendsay_session';

export const fetchUserInfo = () => async (dispatch) => {
  try {
    dispatch(fetchingStart());
    const response = await Service.getUser();
    batch(() => {
      dispatch(getUserSuccess(response));
      dispatch(fetchingEnd());
    });
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = (user) => async (dispatch) => {
  try {
    dispatch(loginStart());
    await Service.login(user);

    Cookie.set(COOKIE_KEY, Service.sendsay.session);
    Service.sendsay.setSessionFromCookie();

    batch(() => {
      dispatch(fetchUserInfo());
      dispatch(loginEnd());
    });
  } catch (error) {
    batch(() => {
      dispatch(loginFailed(getPrettyJson(error)));
      dispatch(loginEnd());
    });
  }
};

export const fetchLogout = () => async (dispatch) => {
  try {
    dispatch(fetchingStart());
    await Service.logout();
    Cookie.remove(COOKIE_KEY);
    batch(() => {
      dispatch(logout());
      dispatch(fetchingEnd());
    });
  } catch (error) {
    toast.error(error.message);
  }
};

export const init = () => async (dispatch) => {
  const cookieSession = Cookie.get(COOKIE_KEY);
  if (cookieSession) {
    Service.sendsay.setSessionFromCookie();
    dispatch(fetchUserInfo());
  } else {
    dispatch(fetchingEnd());
  }
};
