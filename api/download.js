module.exports = (req, res) => {
    if (req.query.password === '123456@a') {
      res.download('/tmp/result.json');
    } else {
      res.status(403).send('密码错误');
    }
  }