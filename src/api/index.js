import Sendsay from 'sendsay-api';

export const sendsay = new Sendsay();

export const sendRequest = async (data) => {
  const response = await sendsay.request(data);

  return response;
};

export const logout = async () => {
  const response = await sendsay.request({
    action: 'logout',
  });

  return response;
};

export const login = async (creditals) => {
  const response = await sendsay.login({
    ...creditals,
  });

  return response;
};

export const getUser = async () => {
  const response = await sendsay.request({
    action: 'pong',
  });

  return response;
};
