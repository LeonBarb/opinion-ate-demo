import {combineReducers} from 'redux';
import {
  RECORD_LOADING_ERROR,
  STORE_RESTAURANTS,
  START_LOADING,
} from './actions';

function records(state = [], action) {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records;
    default:
      return state;
  }
}

function loadError(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return false;
    case RECORD_LOADING_ERROR:
      return true;
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return false;
    case START_LOADING:
      return true;
    case RECORD_LOADING_ERROR:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  records,
  loading,
  loadError,
});
