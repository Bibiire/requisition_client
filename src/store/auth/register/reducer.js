import {
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
  LOAD_USER_SUCCESSFUL,
  LOAD_USER_ERROR,
} from './actionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  registrationError: null,
  user: null,
  isAuthenticated: false,
  message: null,
  loading: false,
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      state = {
        ...state,
        user: null,
        loading: true,
        registrationError: null,
      };
      break;

    case REGISTER_USER_SUCCESSFUL:
    case LOAD_USER_SUCCESSFUL:
      localStorage.setItem('token', action.payload.token);
      state = {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        registrationError: null,
      };
      break;
    case REGISTER_USER_FAILED:
    case LOAD_USER_ERROR:
      localStorage.removeItem('token');
      state = {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
        registrationError: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default account;
