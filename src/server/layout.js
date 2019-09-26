import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

export default (req, store, routers, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {renderRoutes(routers)}
      </StaticRouter>
    </Provider>
  );

  const cssStr = context.css.length ? context.css.join('\n') : '';

  return `
     <html>
       <head>
         <title>ssr</title>
         <style>${cssStr}</style>
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
