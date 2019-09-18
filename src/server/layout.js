import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routers from '@/Routers';
import getStore from '@/store';

export default req => {
  const content = renderToString(
    <Provider store={getStore()}>
      <StaticRouter location={req.url} context={{}}>
        <Routers />
      </StaticRouter>
    </Provider>
  );

  return `
   <html>
     <head>
       <title>ssr</title>
     </head>
     <body>
        <div id="root">${content}</div>
        <script src="./index.js"></script>
     </body>
   </html>
 `;
};
