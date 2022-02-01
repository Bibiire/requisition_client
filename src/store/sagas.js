import { all } from 'redux-saga/effects'

//public
import accountSaga from './auth/saga';
import forgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';
import Requisition from './requisition/saga';
import Department from './department/saga';
import Vendor from './vendors/saga';

export default function* rootSaga() {
    yield all([
        
        //public
        accountSaga(),
        forgetSaga(),
        LayoutSaga(),
        Requisition(),
        Department(),
        Vendor(),
    ])
}