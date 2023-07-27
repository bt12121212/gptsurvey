let results = [];

module.exports = (req, res) => {
  if(req.method === 'POST') {
    let result = req.body;
    results.push(result);
    res.status(200).send("保存成功!");
  } else {
    res.status(405).send("保存失败");
  }
}