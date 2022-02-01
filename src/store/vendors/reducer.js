import {
  CREATE_VENDOR,
  GET_VENDORS,
  UPDATE_VENDOR,
  UPDATE_VENDOR_SUCCESSFUL,
  CREATE_VENDOR_SUCCESSFUL,
  FETCH_VENDORS_SUCCESSFUL,
  VENDOR_API_ERROR,
  // LOGOUT_USER,
  // LOGOUT_USER_SUCCESS,
} from './actionTypes';

const initialState = {
  reqError: null,
  vendors: null,
  loading: false,
};

const vendor = (state = initialState, action) => {
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
        vendors: [action.payload, ...state.vendors],
        loading: false,
      };
      break;

    case UPDATE_VENDOR:
      state = {
        ...state,
        loading: true,
      };
      break;
    case UPDATE_VENDOR_SUCCESSFUL:
      const index = state.vendors.findIndex(
        (vendor) => vendor._id === action.payload._id
      );
      const newArray = [...state.vendors];
      newArray[index] = action.payload;
      state = {
        ...state,
        vendors: newArray,
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

    case VENDOR_API_ERROR:
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

export default vendor;
