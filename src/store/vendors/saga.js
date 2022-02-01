import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import {
  // FETCH_REQUISITION_SUCCESSFUL,
  CREATE_VENDOR,
  GET_VENDORS,
  UPDATE_VENDOR
} from './actionTypes';
import {
  apiError,
  createVendorSuccessful,
  fetchVendorSuccessful,
  updateVendorSuccessful
} from './actions';

import {
  getVendorService,
  createVendorService,
  updateVendorService
} from '../../services/vendorServices';

//If user is login then dispatch redux action's are directly from here.
function* createVendor(payload) {
  try {
    const response = yield call(createVendorService, payload);
    // Todo: -----> check the response
    yield put(createVendorSuccessful(response.data));
  } catch (error) {
    yield put(apiError(error.response.data));
  }
}

function* fetchVendor() {
  try {
    const response = yield call(getVendorService);
    yield put(fetchVendorSuccessful(response.data));
  } catch (error) {
    yield put(apiError(error));
  }
}

function* updateVendor(payload) {
  try {
    const response = yield call(updateVendorService, payload);
    console.log(response.data)
    yield put(updateVendorSuccessful(response.data));
  } catch (error) {
    console.log(error)
    yield put(apiError(error));
  }
}


export function* watchCreateVendor() {
  yield takeEvery(CREATE_VENDOR, createVendor);
}

export function* watchFetchVendor() {
  yield takeEvery(GET_VENDORS, fetchVendor);
}

export function* watchUpdateVendor() {
  yield takeEvery(UPDATE_VENDOR, updateVendor);
}

function* vendorSaga() {
  yield all([fork(watchCreateVendor), fork(watchFetchVendor),fork(watchUpdateVendor)]);
}

export default vendorSaga;
