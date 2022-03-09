import HttpService from './httpsServices';

export const getVendorService = ({ payload }) => {
  let url = 'Vendors';
  if (payload) {
    let payloadLink;
    Object.entries(payload).forEach(([k, v], i) => {
      let KeyValueLink = `${k}=${v}`;
      if (i === 0) {
        payloadLink = `?${KeyValueLink}`;
      } else {
        payloadLink = `${payloadLink}&${KeyValueLink}`;
      }
    });
    url = `${url}${payloadLink}`;
  }
  const http = new HttpService();
  return http.getDataWithToken(url);
};

export const createVendorService = ({ payload }) => {
  const http = new HttpService();
  const url = 'Vendors';
  return http.postData(payload, url);
};

export const updateVendorService = ({ payload }) => {
  const http = new HttpService();
  const url = `vendors/${payload._id}`;
  return http.putData(payload, url);
};
