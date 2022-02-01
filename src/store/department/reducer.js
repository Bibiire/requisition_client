import {
  GET_DEPARTMENT,
  FETCH_DEPARTMENT_SUCCESSFUL,
  API_ERROR,
  // LOGOUT_USER,
  // LOGOUT_USER_SUCCESS,
} from './actionTypes';

const initialState = {
  reqError: null,
  departments: null,
  loading: false,
};

const requisition = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENT:
      state = {
        ...state,
        loading: true,
      };
      break;

    case FETCH_DEPARTMENT_SUCCESSFUL:
      state = {
        ...state,
        departments: action.payload,
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
