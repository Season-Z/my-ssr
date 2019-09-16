import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  counter
});
const reducer = (state = { name: 'dell' }, action) => {
  return state;
};

export default createStore(rootReducer, applyMiddleware(thunk));
