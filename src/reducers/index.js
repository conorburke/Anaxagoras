import { combineReducers } from 'redux';
import senatorsReducer from './senatorsReducer';

export default combineReducers({
  senators: senatorsReducer
});