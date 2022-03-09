import { combineReducers } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication Module
import Account from './auth/reducer';
import Requisition from './requisition/reducer';
import Vendor from './vendors/reducer';
import User from './users/reducer';
import Department from './department/reducer';
import Forget from './auth/forgetpwd/reducer';

const rootReducer = combineReducers({
  // public
  Layout,

  // Authentication
  Account,
  Forget,

  // Private
  Requisition,
  Vendor,
  User,
  Department,
});

export default rootReducer;
