import {
    CREATE_USER,
    GET_USERS,
    UPDATE_USER,
    CREATE_USER_SUCCESSFUL,
    UPDATE_USER_SUCCESSFUL,
    FETCH_USERS_SUCCESSFUL,
    USER_API_ERROR,
  } from './actionTypes';
  
  export const fetchUser = (filter) => {
    return {
      type: GET_USERS,
      payload: filter,
    };
  };
  
  export const fetchUserSuccessful = (payload) => {
    return {
      type: FETCH_USERS_SUCCESSFUL,
      payload: payload,
    };
  };
  
  export const createUser = (payload) => {
    return {
      type: CREATE_USER,
      payload,
    };
  };
  
  export const createUserSuccessful = (payload) => {
    return {
      type: CREATE_USER_SUCCESSFUL,
      payload: payload,
    };
  };
  export const updateUser = (payload) => {
    return {
      type: UPDATE_USER,
      payload,
    };
  };
  
  export const updateUserSuccessful = (payload) => {
    return {
      type: UPDATE_USER_SUCCESSFUL,
      payload: payload,
    };
  };
  
  export const apiError = (error) => {
    return {
      type: USER_API_ERROR,
      payload: error,
    };
  };
  