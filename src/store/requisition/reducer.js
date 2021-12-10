import {
  CREATE_REQUISITION,
  GET_REQUISITION,
  FETCH_REQUISITION_SUCCESSFUL,
  CREATE_REQUISITION_SUCCESSFUL,
  FETCH_REQUISITION_DETAILS,
  FETCH_REQUISITION_DETAILS_SUCCESSFUL,
  UPDATE_REQUISITION_SUCCESSFUL,
  UPDATE_REQUISITION,
  API_ERROR,
  CLEAR_MSG
  // LOGOUT_USER,
  // LOGOUT_USER_SUCCESS,
} from './actionTypes';

const initialState = {
  requestDetails: null,
  reqError: '',
  requests: null,
  loading: false,
  successMsg: false,
};

const requisition = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_MSG:
      state = {
        ...state,
        loading: false,
        successMsg: false,
      };
      break;
    case CREATE_REQUISITION:
      state = {
        ...state,
        loading: false,
        successMsg: false,
      };
      break;
    case CREATE_REQUISITION_SUCCESSFUL:
      state = {
        ...state,
        successMsg: 'Requisition Created Successfully',
        requests: [action.payload, ...state.requests],
        loading: false,
      };
      break;

    case GET_REQUISITION:
      state = {
        ...state,
        successMsg: false,
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
      state = {
        ...state,
        successMsg: false,
        // loading: true,
      };
      break;

    case UPDATE_REQUISITION_SUCCESSFUL:
      state = {
        ...state,
        successMsg: true,
        requests: state.requests.map((req) =>
          req.id === action.payload.id ? action.payload : req
        ),
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
