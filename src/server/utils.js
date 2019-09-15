import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../containers/Home';

export const renderLayout = req => {
  const content = renderToString(<Home />);

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
