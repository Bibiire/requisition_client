import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import {
  // FETCH_REQUISITION_SUCCESSFUL,
  CREATE_VENDOR,
  GET_VENDORS,
} from './actionTypes';
import {
  apiError,
  createVendorSuccessful,
  fetchVendorSuccessful,
} from './actions';

import {
  getVendorService,
  createVendorService,
} from '../../services/vendorServices';

//If user is login then dispatch redux action's are directly from here.
function* createVendor(payload) {
  try {
    const response = yield call(createVendorService, payload);
    // Todo: -----> check the response
    yield put(createVendorSuccessful(response.data));
  } catch (error) {
    console.log('error');
    console.log(error.response.data);
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

export function* watchCreateVendor() {
  yield takeEvery(CREATE_VENDOR, createVendor);
}

export function* watchFetchVendor() {
  yield takeEvery(GET_VENDORS, fetchVendor);
}

function* vendorSaga() {
  yield all([fork(watchCreateVendor), fork(watchFetchVendor)]);
}

export default vendorSaga;
