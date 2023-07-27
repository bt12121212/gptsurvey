module.exports = (req, res) => {
    if(req.method === 'GET') {
      let password = req.query.password;
      if(password === 'aaaaaaaa') {
        res.status(200).json(results);
        alert("密码正确")
      } else {
        res.status(403).send("密码错误");
      }
    } else {
      res.status(405).send("网络错误");
    }
  }