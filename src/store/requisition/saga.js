import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
// Login Redux States
import {
  // FETCH_REQUISITION_SUCCESSFUL,
  CREATE_REQUISITION,
  GET_REQUISITION,
  FETCH_REQUISITION_DETAILS,
  UPDATE_REQUISITION,
  UPDATE_STATUS,
  CLEAR_MSG,
} from './actionTypes';
import {
  apiError,
  createRequisitionSuccessful,
  fetchRequisitionSuccessful,
  fetchRequisitionDetailsSuccessful,
  updateRequisitionSuccessful,
  updateStatusSuccessful,
} from './actions';

import {
  getRequestService,
  getRequestServiceByID,
  getRequestDetailService,
  createRequestService,
  updateRequisitionService,
  updateStatusService,
  getRequestServiceByStatus,
} from '../../services/requisitionServices';

function* createRequisition({ payload }) {
  try {
    const response = yield call(createRequestService, payload);
    // Todo: -----> check the response
    yield put(createRequisitionSuccessful(response.data));
  } catch (error) {
    console.log(error.response.data);
    yield put(apiError(error.response.data));
  }
}

function* fetchRequisition(requestParam) {
  try {
    let response = yield call(getRequestService, requestParam);
    yield put(fetchRequisitionSuccessful(response.data));
  } catch (error) {
    yield put(apiError(error.response.data));
  }
}

function* fetchRequisitionDetails({ payload }) {
  try {
    const response = yield call(getRequestDetailService, payload);
    yield put(fetchRequisitionDetailsSuccessful(response.data));
  } catch (error) {
    console.log(error?.response);
    yield put(apiError(error));
  }
}

function* updateRequisition({ payload }) {
  try {
    const response = yield call(updateRequisitionService, payload);
    yield put(updateRequisitionSuccessful(response.data));
  } catch (error) {
    console.log(error.response);
    yield put(apiError(error));
  }
}

function* updateStatus({ payload }) {
  try {
    const response = yield call(updateStatusService, payload);
    yield put(updateStatusSuccessful(response.data));
  } catch (error) {
    yield put(apiError(error));
  }
}

export function* watchCreateRequisition() {
  yield takeEvery(CREATE_REQUISITION, createRequisition);
}

export function* watchFetchRequisitionDetails() {
  yield takeEvery(FETCH_REQUISITION_DETAILS, fetchRequisitionDetails);
}

export function* watchFetchRequisition() {
  yield takeEvery(GET_REQUISITION, fetchRequisition);
}

export function* watchUpdateStatus() {
  yield takeEvery(UPDATE_STATUS, updateStatus);
}

export function* watchUpdateRequisition() {
  yield takeEvery(UPDATE_REQUISITION, updateRequisition);
}

function* requisitionSaga() {
  yield all([
    fork(watchCreateRequisition),
    fork(watchFetchRequisition),
    fork(watchFetchRequisitionDetails),
    fork(watchUpdateRequisition),
    fork(watchUpdateStatus),
  ]);
}

export default requisitionSaga;
