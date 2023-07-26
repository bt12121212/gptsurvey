const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const password = req.query.password;
    const correctPassword = 'aaaaaaaa';
    const filePath = path.resolve(__dirname, '/tmp/result.json');

    if (password === correctPassword) {
        // Check if file exists
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error(`File doesn't exist`);
                res.status(404).send('文件不存在');
            } else {
                res.download(filePath);
            }
        });
    } else {
        res.status(403).send('密码错误');
    }
}