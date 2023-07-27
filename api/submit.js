const { json } = require('micro');
let results = [];

module.exports = async (req, res) => {
  if(req.method === 'POST') {
    let result = await json(req);
    results.push(result);
    res.status(200).send("保存成功!");
  } else {
    res.status(405).send("Method not allowed");
  }
}