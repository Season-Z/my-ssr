import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import routers from '@/routers';
import { getStore } from '@/store';
import renderLayout from './layout';

const app = express();
app.use(express.static('public')); // 服务器渲染使用静态文件

//相当于拦截到了前端请求地址中的/api部分，然后换成另一个地址
app.use(
  '/api',
  proxy('http://119.29.232.127:8077', {
    proxyReqPathResolver: function(req) {
      return `/api${req.url}`;
    }
  })
);

app.get('*', (req, res) => {
  const store = getStore();
  const branch = matchRoutes(routers, req.path);
  const promises = [];
  const context = {
    css: []
  };

  branch.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    const content = renderLayout(req, store, routers, context);

    // 如果当前页面不存在，则设置http请求的状态码
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3001, () => {
  console.log('3001');
});
