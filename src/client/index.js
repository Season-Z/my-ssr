import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routers from '@/routers';
import { getClientStore } from '@/store';

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>{renderRoutes(routers)}</BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById('root'));
