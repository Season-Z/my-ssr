import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import clientRequest from '@/client/request';
import serverRequest from '@/server/request';
import { reducer as HomeReducer } from '@/page/Home/store';

const rootReducer = combineReducers({
  home: HomeReducer
});

export const getStore = () => {
  //让 thunk 中间件带上 serverRequest
  return createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(serverRequest))
  );
};
export const getClientStore = () => {
  const defaultState = window.state_context ? window.state_context.state : {};
  //让 thunk 中间件带上clientRequest
  return createStore(
    rootReducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientRequest))
  );
};
