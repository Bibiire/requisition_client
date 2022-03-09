import {
    CREATE_USER,
    GET_USERS,
    UPDATE_USER,
    CREATE_USER_SUCCESSFUL,
    UPDATE_USER_SUCCESSFUL,
    FETCH_USERS_SUCCESSFUL,
    USER_API_ERROR,
  } from './actionTypes';
  
  const initialState = {
    reqError: null,
    users: null,
    loading: false,
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USER:
        state = {
          ...state,
          loading: false,
        };
        break;
      case CREATE_USER_SUCCESSFUL:
        state = {
          ...state,
          users: [action.payload, ...state.users],
          loading: false,
        };
        break;
  
      case UPDATE_USER:
        state = {
          ...state,
          loading: true,
        };
        break;
      case UPDATE_USER_SUCCESSFUL:
        const index = state.users.findIndex(
          (user) => user._id === action.payload._id
        );
        const newArray = [...state.users];
        newArray[index] = action.payload;
        state = {
          ...state,
          users: newArray,
          loading: false,
        };
        break;
  
      case GET_USERS:
        state = {
          ...state,
          loading: true,
        };
        break;
  
      case FETCH_USERS_SUCCESSFUL:
        state = {
          ...state,
          users: action.payload,
          loading: false,
        };
        break;
  
      case USER_API_ERROR:
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
  
  export default user;
  