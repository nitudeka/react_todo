import { combineReducers } from 'redux';
import form from './form';
import nav from './nav';
import notification from './notification';

export default combineReducers({ form, nav, notification });
