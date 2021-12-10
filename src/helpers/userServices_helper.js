import { userInfo } from '../utils/utilities';

const getParamUrl = (Params) => {
  let concatUrl = '';
  Object.keys(Params).forEach((value) => {
    concatUrl = `${concatUrl}${value}=${Params[value]}&`;
  });
  // let url = concatUrl.substring(0, concatUrl.length - 1);
  return concatUrl;
};

const GetRequisitionUrl = (requestParam = {}) => {
  let url,
    paramUrl = '';
  // if (userInfo().role[0] === 'Admin') {
  //   if (!requestParam || Object.keys(requestParam).length === 0)
  //     return (url = '/Requisition/getReqByAnyParam');
  //   paramUrl = requestParam && getParamUrl(requestParam);
  //   url = `/Requisition/getReqByAnyParam?${paramUrl}`;
  // } else {
  //   if (!requestParam || Object.keys(requestParam).length === 0)
  //     return (url = `Requisition/getReqByUserIdAndAnyParam?UserId=${
  //       userInfo().authUser.id
  //     }`);
  //   paramUrl = requestParam && getParamUrl(requestParam);
  //   url = `Requisition/getReqByUserIdAndAnyParam?UserId=${
  //     userInfo().authUser.id
  //   }&${paramUrl}`;
  // }
  let departmentalId = userInfo().authUser.departmentId;
  switch (userInfo().role[0]) {
    case 'Admin':
      if (!requestParam || Object.keys(requestParam).length === 0)
        return (url = '/Requisition/getReqByAnyParam');
      paramUrl = requestParam && getParamUrl(requestParam);
      url = `Requisition/getReqByAnyParam?${paramUrl}`;
      break;

    case 'User':
      if (!requestParam || Object.keys(requestParam).length === 0)
        return (url = `Requisition/getReqByUserIdAndAnyParam?UserId=${
          userInfo().authUser.id
        }`);
      paramUrl = requestParam && getParamUrl(requestParam);
      url = `Requisition/getReqByUserIdAndAnyParam?UserId=${
        userInfo().authUser.id
      }&${paramUrl}`;
      break;

    case 'Supervisor':
      if (!requestParam || Object.keys(requestParam).length === 0)
        return (url = `Requisition/getReqByAnyParam?departmentId=${departmentalId}`);
      paramUrl = requestParam && getParamUrl(requestParam);
      url = `Requisition/getReqByAnyParam?departmentId=${departmentalId}${paramUrl}`;
      break;
      
    case 'MD':
      if (!requestParam || Object.keys(requestParam).length === 0)
        return (url = `Requisition/getReqByAnyParam`);
      paramUrl = requestParam && getParamUrl(requestParam);
      url = `Requisition/getReqByAnyParam${paramUrl}`;
      break;

    default:
      break;
  }
  return url;
};

const getUserToken = () => {
  if (!localStorage.getItem(process.env.REACT_APP_USERSTORAGE)) return null;
  return JSON.parse(localStorage.getItem(process.env.REACT_APP_USERSTORAGE));
};

export { GetRequisitionUrl, getUserToken };
