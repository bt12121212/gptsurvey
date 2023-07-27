module.exports = (req, res) => {
  if(req.method === 'GET') {
    let password = req.query.password;
    if(password === 'aaaaaaaa') {
      res.status(200).json(results);
    } else {
      res.status(403).send("Incorrect password");
    }
  } else {
    res.status(405).send("Method not allowed");
  }
}