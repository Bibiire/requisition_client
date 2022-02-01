import { userInfo } from '../utils/utilities';


const getUserToken = () => {
  if (!localStorage.getItem(process.env.REACT_APP_USERSTORAGE)) return null;
  return JSON.parse(localStorage.getItem(process.env.REACT_APP_USERSTORAGE));
};

export { getUserToken };
