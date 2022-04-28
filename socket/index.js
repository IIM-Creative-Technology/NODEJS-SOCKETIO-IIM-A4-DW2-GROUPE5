const {Router} = require('express');
const router = new Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

module.exports = router;
