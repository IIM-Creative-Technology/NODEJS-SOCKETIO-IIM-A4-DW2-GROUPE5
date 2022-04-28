/**
 * Route : hello
 */

const {Router} = require('express');
const router = new Router();

router
    .get('/', (req, res) => {
      res.json({message: 'Welcome to the hello route !'});
    });

module.exports = router;
