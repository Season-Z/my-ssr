import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routers from '@/Routers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state = { name: 'dell' }, action) => {
  return state;
};
const stores = createStore(reducer);

const App = () => {
  return (
    <Provider store={stores}>
      <BrowserRouter>{Routers}</BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById('root'));
