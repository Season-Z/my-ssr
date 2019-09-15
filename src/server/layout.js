import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routers from '@/client/Routers';

export default req => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Routers />
    </StaticRouter>
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
