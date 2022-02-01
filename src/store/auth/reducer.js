import {
  CHECK_LOGIN,
  LOGIN_USER_SUCCESSFUL,
  API_ERROR,
  LOAD_USER,
  LOGOUT_USER,
  AUTH_ERROR,
  LOGOUT_USER_SUCCESS,
  LOAD_USER_SUCCESSFUL,
} from './actionTypes';

const initialState = {
  token: localStorage.getItem("pra_token"),
  user: null,
  loginError: null,
  isAuthenticated: null,
  message: null,
  loading: true,
};

const Account = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN:
    case LOAD_USER:
      state = {
        ...state,
        loginError: null,
        loading: true,
      };
      break;
    case LOGIN_USER_SUCCESSFUL:
      localStorage.setItem('pra_token', action.payload);
      state = {
        ...state,
        pra_token: action.payload,
        isAuthenticated: true,
        loading: false,
      };
      break;

    case LOGOUT_USER:
      state = { ...state, loading: true };
      break;

    case LOGOUT_USER_SUCCESS:
      state = {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
      break;

    case LOAD_USER_SUCCESSFUL:
      state = {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
      break;

    case API_ERROR:
    case AUTH_ERROR:
      state = {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        loginError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Account;
