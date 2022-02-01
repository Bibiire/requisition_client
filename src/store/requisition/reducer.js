import {
  CREATE_REQUISITION,
  GET_REQUISITION,
  FETCH_REQUISITION_SUCCESSFUL,
  CREATE_REQUISITION_SUCCESSFUL,
  FETCH_REQUISITION_DETAILS,
  FETCH_REQUISITION_DETAILS_SUCCESSFUL,
  UPDATE_REQUISITION_SUCCESSFUL,
  UPDATE_REQUISITION,
  UPDATE_STATUS_SUCCESSFUL,
  UPDATE_STATUS,
  API_ERROR,
  CLEAR_MSG,
  // LOGOUT_USER,
  // LOGOUT_USER_SUCCESS,
} from './actionTypes';

const initialState = {
  requestDetails: null,
  reqError: '',
  requests: null,
  loading: false,
  successMsg: null,
};

const requisition = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_MSG:
      state = {
        ...state,
        loading: false,
        successMsg: null,
      };
      break;
    case CREATE_REQUISITION:
      state = {
        ...state,
        loading: false,
        // successMsg: false,
      };
      break;
    case CREATE_REQUISITION_SUCCESSFUL:
      state = {
        ...state,
        // successMsg: 'Requisition Created Successfully',
        requests: [action.payload, ...state.requests],
        loading: false,
      };
      break;

    case GET_REQUISITION:
      state = {
        ...state,
        requests: null,
        // successMsg: false,
        loading: true,
      };
      break;

    case FETCH_REQUISITION_SUCCESSFUL:
      state = {
        ...state,
        requests: action.payload,
        loading: false,
      };
      break;

    case FETCH_REQUISITION_DETAILS:
      state = {
        ...state,
        requestDetails: null,
        loading: true,
      };
      break;

    case FETCH_REQUISITION_DETAILS_SUCCESSFUL:
      state = {
        ...state,
        requestDetails: action.payload,
        loading: false,
      };
      break;

    case UPDATE_REQUISITION:
    case UPDATE_STATUS:
      state = {
        ...state,
        // successMsg: false,
        // loading: true,
      };
      break;

    case UPDATE_REQUISITION_SUCCESSFUL:
    case UPDATE_STATUS_SUCCESSFUL:
      const index = state.requests.findIndex(
        (request) => request._id === action.payload._id
      );
      const newArray = [...state.requests];
      newArray[index] = action.payload;
      state = {
        ...state,
        successMsg: true,
        requests: newArray,
        // loading: false,
      };
      break;

    // case LOGOUT_USER_SUCCESS:
    //   state = { ...state };
    //   break;

    case API_ERROR:
      state = {
        ...state,
        loading: false,
        reqError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default requisition;
