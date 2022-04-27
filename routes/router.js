/**
 * This is the Router that regroups all the routes.
 */

const express = require('express')

const indexRoute = require('./index')
const helloRoute = require('./hello')
const catsRoute = require('./cats')
const {docsRouter} = require('./swagger');

const router = express.Router()

router
    // Default page
    .use('/', indexRoute)
    // Test
    .use('/hello/', helloRoute)
    // CRUD
    .use('/cats/', catsRoute)
    // API docs
    .use('/api-docs', docsRouter);

module.exports = router;
