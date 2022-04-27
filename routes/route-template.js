/**
 * Route : [ROUTENAME]
 */

const express = require('express')
const router = express.Router()

router.
    get('/', (req, res) => {
        res.json({ message: 'Hey, i\m a route template default message.' })
    })

module.exports = router;