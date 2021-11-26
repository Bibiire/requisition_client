import {
  CREATE_VENDOR,
  GET_VENDORS,
  CREATE_VENDOR_SUCCESSFUL,
  FETCH_VENDORS_SUCCESSFUL,
  API_ERROR,
  // LOGOUT_USER,
  // LOGOUT_USER_SUCCESS,
} from './actionTypes';

const initialState = {
  reqError: 'aaa',
  vendors: null,
  loading: false,
};

const requisition = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_VENDOR:
      state = {
        ...state,
        loading: false,
      };
      break;
    case CREATE_VENDOR_SUCCESSFUL:
      state = {
        ...state,
        vendors: action.payload,
        loading: false,
      };
      break;

    case GET_VENDORS:
      state = {
        ...state,
        loading: true,
      };
      break;

    case FETCH_VENDORS_SUCCESSFUL:
      state = {
        ...state,
        vendors: action.payload,
        loading: false,
      };
      break;

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
