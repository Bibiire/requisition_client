import {
  CREATE_VENDOR,
  GET_VENDORS,
  UPDATE_VENDOR,
  CREATE_VENDOR_SUCCESSFUL,
  UPDATE_VENDOR_SUCCESSFUL,
  FETCH_VENDORS_SUCCESSFUL,
  VENDOR_API_ERROR,
} from './actionTypes';

export const fetchVendor = (filter) => {
  return {
    type: GET_VENDORS,
    payload: filter,
  };
};

export const fetchVendorSuccessful = (payload) => {
  return {
    type: FETCH_VENDORS_SUCCESSFUL,
    payload: payload,
  };
};

export const createVendor = (payload) => {
  return {
    type: CREATE_VENDOR,
    payload,
  };
};

export const createVendorSuccessful = (payload) => {
  return {
    type: CREATE_VENDOR_SUCCESSFUL,
    payload: payload,
  };
};
export const updateVendor = (payload) => {
  return {
    type: UPDATE_VENDOR,
    payload,
  };
};

export const updateVendorSuccessful = (payload) => {
  return {
    type: UPDATE_VENDOR_SUCCESSFUL,
    payload: payload,
  };
};

export const apiError = (error) => {
  return {
    type: VENDOR_API_ERROR,
    payload: error,
  };
};
