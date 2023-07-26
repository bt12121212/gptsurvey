module.exports = (req, res) => {
    const password = req.query.password;
    const correctPassword = 'aaaaaaaa';

    if (password === correctPassword) {
        res.download('/tmp/result.json');
    } else {
        res.status(403).send('密码错误');
    }
}