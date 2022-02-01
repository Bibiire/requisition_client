import axios from 'axios';

export const getAccessToken = () => {
  return localStorage.getItem('pra_token');
};

// export const verifyToken = (token) => {
//   try {
//     const { exp, iat } = jwt_decode(token);
//     const issuedTime = iat * 1000 - 60000;
//     const tokenTime = Number(localStorage.getItem(process.env.tokenTime));
//     const differenceInTime = issuedTime - tokenTime;
//     const expirationTime = exp * 1000 - 60000 - differenceInTime;

//     if (Date.now() >= expirationTime) {
//       window.location.href = process.env.appBaseUrl + '/logout';
//     }
//   } catch (error) {
//     window.location.href = process.env.appBaseUrl + '/logout';
//   }
//   return;
// };

export const saveAccessToken = (token) => {
  localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, token);
  // localStorage.setItem(process.env.REACT_APP_TOKEN_TIME, Date.now());
};

export const saveRefreshToken = (token) => {
  localStorage.setItem(process.env.REACT_APP_REFRESH_TOKEN_NAME, token);
};

export const userInfo = () => {
  const role = JSON.parse(localStorage.getItem('userRole'));
  const authUser = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_USERSTORAGE)
  );

  return { role, authUser };
};

export const groupArrObj = (arr, groupBy) => {
  let result = arr
    .filter((val) => val.status !== 1 && val.status !== 6)
    .reduce(function (r, a) {
      r[a.user.departments[groupBy]] = r[a.user.departments[groupBy]] || [];
      r[a.user.departments[groupBy]].push(a);

      return r;
    }, Object.create(null));

  return result;
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};
