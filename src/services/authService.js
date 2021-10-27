import HttpService from './httpsServices';

export const postLogin = (payload) => {
  console.log(payload)
  const http = new HttpService();
  const url = 'ApplicationUser/Login';
  return http.postData(payload, url);
};
