import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

export default (req, store, routers) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(routers)}
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
          <script>
            window.state_context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src="./index.js"></script>
       </body>
     </html>
   `;
};
