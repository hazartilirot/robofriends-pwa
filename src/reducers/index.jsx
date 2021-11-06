import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer';
import { fetchRobotsReducer } from './fetchRobotsReducer';

export default combineReducers({
  searchCombined: searchReducer,
  robotsCombined: fetchRobotsReducer
})