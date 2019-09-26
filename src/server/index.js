import express from 'express';
import { matchRoutes } from 'react-router-config';
import routers from '@/routers';
import { getStore } from '@/store';
import renderLayout from './layout';

const app = express();
app.use(express.static('public')); // 服务器渲染使用静态文件

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
    res.send(renderLayout(req, store, routers, context));
  });
});

app.listen(3001, () => {
  console.log('listen:3001');
});
