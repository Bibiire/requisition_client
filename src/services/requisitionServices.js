import HttpService from './httpsServices';
import { GetRequisitionUrl } from '../helpers/userServices_helper';

let Params = {
  startdate: '',
  endDate: '',
  departmentId: '3',
  status: '',
};

export const getRequestService = ({ payload }) => {
  let params = payload ? payload : {};
  let url = GetRequisitionUrl(params);
  console.log(url)
  const http = new HttpService();
  return http.getDataWithToken(url);
};

export const createRequestService = (payload) => {
  const http = new HttpService();
  const url = 'Requisition';
  return http.postDataWithToken(payload, url);
};

export const getRequestDetailService = (id) => {
  const http = new HttpService();
  const url = `Requisition/${id}`;
  return http.getDataWithToken(url);
};

export const updateRequisitionService = (payload) => {
  const http = new HttpService();
  const url = `Requisition/${payload.id}`;
  return http.putData(payload, url);
};
