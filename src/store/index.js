import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as HomeReducer } from '@/page/Home/store';

const rootReducer = combineReducers({
  home: HomeReducer
});

const getStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

const getClientStore = () => {
  const defaultState = window.state_context.state;
  return createStore(rootReducer, defaultState, applyMiddleware(thunk));
};

export { getStore, getClientStore };
