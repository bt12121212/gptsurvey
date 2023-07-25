var express = require('express');
var fs = require('fs');
var app = express();

// 用于解析 JSON 请求体
app.use(express.json());
// 设置静态文件夹
app.use(express.static('public'));

// 这个路由用于接收前端发送的问協数据
app.post('/submit', function (req, res) {
  var data = req.body;
  fs.appendFileSync('result.csv', JSON.stringify(data) + '\n');
  res.json({status: 'success'});
});

// 这个路由用于处理密码保护的下载请求
app.get('/download', function (req, res) {
  if (req.query.password === '123456@a') {
    res.download('result.csv');
  } else {
    res.status(403).send('密码错误');
  }
});

app.listen(3000);