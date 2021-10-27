// import jwt_decode from 'jwt-decode';

export const getAccessToken = () => {
  return localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
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
  localStorage.setItem(process.env.REACT_APP_TOKEN_TIME, Date.now());
};

export const saveRefreshToken = (token) => {
  localStorage.setItem(process.env.REACT_APP_REFRESH_TOKEN_NAME, token);
};
