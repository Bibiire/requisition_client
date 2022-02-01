
import HttpService from './httpsServices';

export const getDepartmentService = () => {
  const http = new HttpService();
  const url = 'departments';
  return http.getDataWithToken(url);
};

// export const createRequestService = (payload) => {
//   const http = new HttpService();
//   const url = 'Departments';
//   return http.postDataWithToken(payload, url);
// };
