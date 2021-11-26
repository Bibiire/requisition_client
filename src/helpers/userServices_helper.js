import { userInfo } from '../utils/utilities';

const getParamUrl = (Params) => {
  let concatUrl = '';
  Object.keys(Params).forEach((value) => {
    concatUrl = `${concatUrl}${value}=${Params[value]}&`;
  });

  return concatUrl;
};

const GetRequisitionUrl = (requestParam) => {
  let url;
  if (userInfo().role[0] === 'Admin') {
    if (!requestParam) return (url = '/Requisition');
    const paramUrl = getParamUrl(requestParam)
    url = `/Requisition/getReqByAnyParam?${paramUrl}`;
  } else {
    if (!requestParam)
      return (url = `/Requisition/getReqByUserId?userId=${
        userInfo().authUser.id
      }/`);
    url = `/Requisition/getReqByUserId?userId=${
      userInfo().authUser.id
    }`;
  }
  return url;
};

const getUserToken = () => {
  if (!localStorage.getItem("authUser")) return null;
  return JSON.parse(localStorage.getItem("authUser"));
};

export { GetRequisitionUrl, getUserToken };
