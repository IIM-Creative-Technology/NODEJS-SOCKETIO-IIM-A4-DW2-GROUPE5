/**
 * This is the Router that regroups all the routes.
 */

const {Router} = require('express');
const router = new Router();

const indexRoute = require('./index');
const helloRoute = require('./hello');
const catsRoute = require('./cats');

router
    .use('/', indexRoute)
    .use('/hello/', helloRoute)
    .use('/cats/', catsRoute);

module.exports = router;
