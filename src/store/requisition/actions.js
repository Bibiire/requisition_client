import {
  CREATE_REQUISITION,
  GET_REQUISITION,
  UPDATE_REQUISITION,
  UPDATE_REQUISITION_SUCCESSFUL,
  FETCH_REQUISITION_DETAILS,
  FETCH_REQUISITION_DETAILS_SUCCESSFUL,
  CREATE_REQUISITION_SUCCESSFUL,
  FETCH_REQUISITION_SUCCESSFUL,
  API_ERROR,
  CLEAR_MSG
} from './actionTypes';

export const clearMsg = ()=>{
  return {
    type: CLEAR_MSG,
  };
}

export const createRequisition = (reqPayload) => {
  return {
    type: CREATE_REQUISITION,
    payload: reqPayload,
  };
};

export const createRequisitionSuccessful = (payload) => {
  return {
    type: CREATE_REQUISITION_SUCCESSFUL,
    payload: payload,
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const fetchRequisitionByDpt = (DepartmentId) => {
  return {
    type: GET_REQUISITION,
    payload: DepartmentId,
  };
};

export const updateRequisition = (updateData) => {
  return {
    type: UPDATE_REQUISITION,
    payload: updateData,
  };
};

export const updateRequisitionSuccessful = (payload) => {
  return {
    type: UPDATE_REQUISITION_SUCCESSFUL,
    payload: payload,
  };
};

export const fetchRequisition = (payload) => {
  return {
    type: GET_REQUISITION,
    payload: payload,
  };
};

export const fetchRequisitionSuccessful = (payload) => {
  return {
    type: FETCH_REQUISITION_SUCCESSFUL,
    payload: payload,
  };
};

// Requisition Details
export const fetchRequisitionDetails = (payload) => {
  return {
    type: FETCH_REQUISITION_DETAILS,
    payload: payload,
  };
};

export const fetchRequisitionDetailsSuccessful = (payload) => {
  return {
    type: FETCH_REQUISITION_DETAILS_SUCCESSFUL,
    payload: payload,
  };
};
