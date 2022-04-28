/**
 * This is the Router that regroups all the routes.
 */

const {Router} = require('express');

const indexRoute = require('./index');
const helloRoute = require('./hello');
const {catsRouter} = require('./cats');
const {docsRouter} = require('./swagger');

const router = new Router();

router
    // Default page
    .use('/', indexRoute)
    // Test
    .use('/hello/', helloRoute)
    // CRUD
    .use('/cats/', catsRouter)
    // API docs
    .use('/api-docs', docsRouter);

module.exports = router;
