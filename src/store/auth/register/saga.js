import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

//Account Redux states
import { REGISTER_USER, LOAD_USER } from './actionTypes';
import {
  registerUserSuccessful,
  registerUserFailed,
  loadUserError,
  loadUserSuccessful,
} from './actions';

//AUTH related methods
import { postRegister } from '../../../helpers/fackBackend_Helper';

import { getUserToken } from '../../../helpers/userServices_helper';
import { getFirebaseBackend } from '../../../helpers/firebase_helper';

// initialize firebase Auth
const fireBaseBackend = getFirebaseBackend();

// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === 'firebase') {
      const response = yield call(
        fireBaseBackend.registerUser,
        user.email,
        user.password
      );
      yield put(registerUserSuccessful(response));
    } else {
      const response = yield call(postRegister, '/post-register', user);
      yield put(registerUserSuccessful(response));
    }
  } catch (error) {
    yield put(registerUserFailed(error));
  }
}

function* loadUser({ payload }) {
  try {
    // const response = yield call(postRegister, '/post-register', user);

    if (getUserToken()) {
      yield put(loadUserSuccessful(getUserToken()));
    } else {
      yield put(loadUserError());
    }
  } catch (error) {}
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

export function* watchLoadUser() {
  yield takeEvery(LOAD_USER, loadUser);
}

function* accountSaga() {
  yield all([fork(watchUserRegister), fork(watchLoadUser)]);
}

export default accountSaga;
