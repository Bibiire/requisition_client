import { all } from 'redux-saga/effects'

//public
import accountSaga from './auth/register/saga';
import loginSaga from './auth/login/saga';
import forgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';
import Requisition from './requisition/saga';
import Department from './department/saga';
import Vendor from './vendors/saga';

export default function* rootSaga() {
    yield all([
        
        //public
        accountSaga(),
        loginSaga(),
        forgetSaga(),
        LayoutSaga(),
        Requisition(),
        Department(),
        Vendor(),
    ])
}