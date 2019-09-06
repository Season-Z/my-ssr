import express from 'express';

const app = express();

app.get('/', function(req, res) {
  console.log(req);
  res.send('Hello');
});

app.listen(3001, () => {
  console.log('listen:3001');
});
