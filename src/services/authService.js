import HttpService from './httpsServices';
import { setAuthToken } from '../utils/utilities';

export const postLogin = (payload) => {
  const http = new HttpService();
  const url = 'auth';
  return http.postData(payload, url);
};

export const loadUserServer = () => {
  if (localStorage.pra_token) {
    setAuthToken(localStorage.pra_token);
  }
  const http = new HttpService();
  const url = 'users/user';
  return http.getData(url);
};
