import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import {
  GET_DEPARTMENT,
} from './actionTypes';
import {
  apiError,
  fetchDepartmentSuccessful,
} from './actions';

import {
  getDepartmentService,
} from '../../services/departmentalServices';


function* fetchDepartment() {
  try {
    const response = yield call(getDepartmentService);
    yield put(fetchDepartmentSuccessful(response.data));
  } catch (error) {
    yield put(apiError(error));
  }
}

// function* fetchRequisitionDetails({payload}) {
//   try {
//     const response = yield call(getRequestDetailService, payload);
//     yield put(fetchRequisitionDetailsSuccessful(response.data));
//   } catch (error) {
//     yield put(apiError(error));
//   }
// }

// export function* watchCreateRequisition() {
//   yield takeEvery(CREATE_REQUISITION, createRequisition);
// }

// export function* watchFetchRequisitionDetails() {
//   yield takeEvery(FETCH_REQUISITION_DETAILS, fetchRequisitionDetails);
// }

export function* watchFetchDepartment() {
  yield takeEvery(GET_DEPARTMENT, fetchDepartment);
}

function* departmentSaga() {
  yield all([
    fork(watchFetchDepartment),
    // fork(watchUpdateDepartment),
  ]);
}

export default departmentSaga;
