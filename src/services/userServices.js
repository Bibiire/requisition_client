import HttpService from './httpsServices';

export const getUserService = ({ payload }) => {
  let url = 'users';
  const http = new HttpService();
  return http.getDataWithToken(url);
};

export const createUserService = ({ payload }) => {
  const http = new HttpService();
  const url = 'users';
  return http.postData(payload, url);
};

export const updateUserService = ({ payload }) => {
  const http = new HttpService();
  const url = `users/${payload._id}`;
  return http.putData(payload, url);
};