import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
// Login Redux States
import {
  // FETCH_REQUISITION_SUCCESSFUL,
  CREATE_REQUISITION,
  GET_REQUISITION,
  FETCH_REQUISITION_DETAILS,
  UPDATE_REQUISITION,
} from './actionTypes';
import {
  apiError,
  createRequisitionSuccessful,
  fetchRequisitionSuccessful,
  fetchRequisitionDetailsSuccessful,
  updateRequisitionSuccessful,
} from './actions';

import {
  getRequestService,
  getRequestServiceByID,
  getRequestDetailService,
  createRequestService,
  updateRequisitionService,
  getRequestServiceByStatus,
} from '../../services/requisitionServices';

function* createRequisition({ payload }) {
  try {
    const response = yield call(createRequestService, payload);
    // Todo: -----> check the response
    yield put(createRequisitionSuccessful(response.data.requisition));
  } catch (error) {
    console.log('error');
    console.log(error.response.data);
    yield put(apiError(error.response.data));
  }
}

function* fetchRequisition(requestParam) {
  let response;
  try {
    response = yield call(getRequestService, requestParam);
    console.log(response);
    yield put(fetchRequisitionSuccessful(response.data));
  } catch (error) {
    yield put(apiError(error));
  }
}

function* fetchRequisitionDetails({ payload }) {
  try {
    const response = yield call(getRequestDetailService, payload);
    yield put(fetchRequisitionDetailsSuccessful(response.data));
  } catch (error) {
    yield put(apiError(error));
  }
}

function* updateRequisition({ payload }) {
  try {
    const response = yield call(updateRequisitionService, payload);
    yield put(updateRequisitionSuccessful(payload));
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

export function* watchUpdateRequisition() {
  yield takeEvery(UPDATE_REQUISITION, updateRequisition);
}

function* requisitionSaga() {
  yield all([
    fork(watchCreateRequisition),
    fork(watchFetchRequisition),
    fork(watchFetchRequisitionDetails),
    fork(watchUpdateRequisition),
  ]);
}

export default requisitionSaga;
