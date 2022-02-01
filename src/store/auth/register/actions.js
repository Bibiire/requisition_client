import {
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
  LOAD_USER,
  LOAD_USER_SUCCESSFUL,
  LOAD_USER_ERROR,
} from './actionTypes';

export const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    payload: { user },
  };
};

export const registerUserSuccessful = (user) => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: user,
  };
};

export const registerUserFailed = (error) => {
  return {
    type: REGISTER_USER_FAILED,
    payload: error,
  };
};

export const loadUser = (payload) => {
  console.log('load user action')
  return {
    type: LOAD_USER,
    payload: { payload },
  };
};

export const loadUserSuccessful = (payload) => {
  return {
    type: LOAD_USER_SUCCESSFUL,
    payload: { payload },
  };
};

export const loadUserError = (error) => {
  return {
    type: LOAD_USER_ERROR,
    payload: error,
  };
};
