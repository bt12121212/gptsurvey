let results = [];

module.exports = (req, res) => {
  if(req.method === 'POST') {
    let result = req.body;
    results.push(result);
    res.status(200).send("Result saved successfully!");
  } else {
    res.status(405).send("Method not allowed");
  }
}