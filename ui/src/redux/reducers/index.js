import { combineReducers } from 'redux';
import registerReducer from './users';

const rootReducer = combineReducers({
  register: registerReducer,
})

export default rootReducer;