import {
  GET_DEPARTMENT,
  FETCH_DEPARTMENT_SUCCESSFUL,
  API_ERROR,
} from './actionTypes';

export const fetchDepartment = () => {
  return {
    type: GET_DEPARTMENT,
  };
};

export const fetchDepartmentSuccessful = (payload) => {
  return {
    type: FETCH_DEPARTMENT_SUCCESSFUL,
    payload: payload,
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};