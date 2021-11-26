import { combineReducers } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/register/reducer';
import Login from './auth/login/reducer';
import Requisition from './requisition/reducer';
import Vendor from './vendors/reducer';
import Department from './department/reducer';
import Forget from './auth/forgetpwd/reducer';

const rootReducer = combineReducers({
  // public
  Layout,

  // Authentication
  Account,
  Login,
  Forget,

  // Private
  Requisition,
  Vendor,
  Department,
});

export default rootReducer;
