import rootReducer from './reducers';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import api from '../api';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);

export default store;
