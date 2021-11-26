import HttpService from './httpsServices';

export const postLogin = (payload) => {
  const http = new HttpService();
  const url = 'ApplicationUser/Login';
  return http.postData(payload, url);
};
