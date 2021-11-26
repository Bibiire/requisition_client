import HttpService from './httpsServices';

export const getVendorService = () => {
  const http = new HttpService();
  const url = 'Vendors';
  return http.getDataWithToken(url);
};

export const createVendorService = (payload) => {
  const http = new HttpService();
  const url = 'Vendors';
  return http.postData(payload, url);
};
