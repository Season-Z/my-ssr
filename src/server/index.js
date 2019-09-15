import express from 'express';
import renderLayout from './layout';

const app = express();
app.use(express.static('public')); // 服务器渲染使用静态文件

app.get('*', (req, res) => {
  res.send(renderLayout(req));
});

app.listen(3001, () => {
  console.log('listen:3001');
});
