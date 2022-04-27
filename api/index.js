const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'Bienvenue sur l\'api' });
});


module.exports.router = router;