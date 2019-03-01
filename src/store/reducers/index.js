import { combineReducers } from 'redux';
import form from './form';
import nav from './nav';
import calendar from './calendar';

export default combineReducers({ form, nav, calendar });
