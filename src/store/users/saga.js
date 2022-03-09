import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import {
  // FETCH_REQUISITION_SUCCESSFUL,
  CREATE_USER,
  GET_USERS,
  UPDATE_USER
} from './actionTypes';
import {
  apiError,
  createUserSuccessful,
  fetchUserSuccessful,
  updateUserSuccessful
} from './actions';

import {
  getUserService,
  createUserService,
  updateUserService
} from '../../services/userServices';

//If user is login then dispatch redux action's are directly from here.
function* createUser(payload) {
  try {
    const response = yield call(createUserService, payload);
    // Todo: -----> check the response
    yield put(createUserSuccessful(response.data));
  } catch (error) {
    console.log(error.response.data)
    yield put(apiError(error.response.data));
  }
}

function* fetchUser(payload) {
  try {
    const response = yield call(getUserService, payload);
    yield put(fetchUserSuccessful(response.data));
  } catch (error) {
    yield put(apiError(error));
  }
}

function* updateUser(payload) {
  try {
    const response = yield call(updateUserService, payload);
    console.log(response.data)
    yield put(updateUserSuccessful(response.data));
  } catch (error) {
    console.log(error)
    yield put(apiError(error));
  }
}


export function* watchCreateUser() {
  yield takeEvery(CREATE_USER, createUser);
}

export function* watchFetchUser() {
  yield takeEvery(GET_USERS, fetchUser);
}

export function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER, updateUser);
}

function* userSaga() {
  yield all([fork(watchCreateUser), fork(watchFetchUser),fork(watchUpdateUser)]);
}

export default userSaga;
