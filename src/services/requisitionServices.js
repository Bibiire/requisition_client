import HttpService from './httpsServices';
import { GetRequisitionUrl } from '../helpers/userServices_helper';

let Params = {
  // startdate: '2021-11-11',
  // endDate: '2021-11-15',
  // departmentId: '2',
  // status: '2',
};

export const getRequestService = (requestParam) => {
  let url = GetRequisitionUrl(Params)
  console.log(url)
  const http = new HttpService();
  return http.getDataWithToken(url);
};

export const getRequestServiceByID = (id) => {
  console.log(id);
  const http = new HttpService();
  const url = `/Requisition/getReqByDeptId?departmentId=${id}`;
  return http.getDataWithToken(url);
};

export const getRequestServiceByStatus = (id) => {
  console.log(id);
  const http = new HttpService();
  const url = `/Requisition/getReqByStatus?status=${id}`;
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
  console.log(payload);
  // const http = new HttpService();
  // const url = `Requisition/${payload.id}`;
  // return http.putData(payload, url);
};
