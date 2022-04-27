/**
 * This is the Router that regroups all the routes.
 */

const express = require('express')
const router = express.Router()

const indexRoute = require('./index')
const helloRoute = require('./hello')
const catsRoute = require('./cats')

router
    .use('/', indexRoute)
    .use('/hello/', helloRoute)
    .use('/cats/', catsRoute)

module.exports = router;
