import HttpService from './httpsServices';
import { GetRequisitionUrl } from '../helpers/userServices_helper';

export const getRequestService = ({ payload }) => {
  let url = 'requests';
  console.log(payload);
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

export const createRequestService = (payload) => {
  const http = new HttpService();
  const url = 'requests';
  return http.postDataWithToken(payload, url);
};

export const getRequestDetailService = (id) => {
  const http = new HttpService();
  const url = `requests/${id}`;
  return http.getDataWithToken(url);
};

export const updateStatusService = ({ id, status, role }) => {
  const update = { status };
  const http = new HttpService();
  const url = `requests/${id}?role=${role}`;
  return http.putData(update, url);
};

export const updateRequisitionService = ({ updateData, id }) => {
  const http = new HttpService();
  const url = `requests/?requestId=${id}`;
  return http.postDataWithToken(updateData, url);
};
