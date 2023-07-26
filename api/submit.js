var fs = require('fs');

module.exports = (req, res) => {
  var data = req.body;
  fs.writeFileSync('/tmp/result.json', JSON.stringify(data), { flag: 'a' }); // 请注意，Vercel上的文件系统是临时的，所以我们不能将数据保存在磁盘上，但是可以在函数执行期间使用它
  res.json({status: 'success'});
}