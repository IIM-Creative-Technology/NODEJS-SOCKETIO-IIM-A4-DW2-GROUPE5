/**
 * Route : hello
 */

const express = require('express')
const router = express.Router()

router
    .get('/', (req, res) => {
        res.json({ message: 'Welcome to the hello route !' })
    })

module.exports = router;