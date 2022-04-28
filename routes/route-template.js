/**
 * Route : [ROUTENAME]
 */

const { Router } = require('express');
const router = new Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hey, im a route template default message.' });
});

module.exports = router;
