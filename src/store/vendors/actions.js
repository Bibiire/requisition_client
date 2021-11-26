import {
  CREATE_VENDOR,
  GET_VENDORS,
  GET_DEPARTMENT,
  CREATE_VENDOR_SUCCESSFUL,
  FETCH_VENDORS_SUCCESSFUL,
  FETCH_DEPARTMENT_SUCCESSFUL,
  API_ERROR,
} from './actionTypes';

export const createVendor = (reqPayload) => {
  return {
    type: CREATE_VENDOR,
    payload: { reqPayload },
  };
};

export const createVendorSuccessful = (payload) => {
  return {
    type: CREATE_VENDOR_SUCCESSFUL,
    payload: payload,
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const fetchVendor = () => {
  return {
    type: GET_VENDORS,
  };
};

export const fetchVendorSuccessful = (payload) => {
  return {
    type: FETCH_VENDORS_SUCCESSFUL,
    payload: payload,
  };
};
