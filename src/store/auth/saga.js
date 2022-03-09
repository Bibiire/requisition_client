import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import { saveAccessToken } from '../../utils/utilities';

// Login Redux States
import { CHECK_LOGIN, LOGOUT_USER, LOAD_USER } from './actionTypes';
import {
  apiError,
  authError,
  loginUserSuccessful,
  logoutUserSuccess,
  loadUserSuccessful,
} from './actions';

import { postLogin, loadUserServer } from '../../services/authService';


function* loadUserHandler() {
  try {
    const response = yield call(loadUserServer);
    yield put(loadUserSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(authError(error.response.data));
  }
}

//If user is login then dispatch redux action's are directly from here.
function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(postLogin, {
      name: user.username,
      password: user.password,
    });
    yield put(loginUserSuccessful(response.data.token));
    yield call(loadUserHandler);
    history.push('/app-dash');
  } catch (error) {
    console.log(error.response);
    yield put(apiError(error.response.data));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME);
    yield put(logoutUserSuccess());
  } catch (error) {
    yield put(apiError(error));
  }
}

export function* watchUserLogin() {
  yield takeEvery(CHECK_LOGIN, loginUser);
}

export function* watchUserLogout() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export function* watchLoadUser() {
  yield takeEvery(LOAD_USER, loadUserHandler);
}

function* loginSaga() {
  yield all([fork(watchUserLogin), fork(watchUserLogout), fork(watchLoadUser)]);
}

export default loginSaga;
