/**
 * This is the Router that regroups all the routes.
 */

const { Router } = require('express');

const indexRoute = require('./index');
const helloRoute = require('./hello');
const { catsRouter } = require('./cats');
const { usersRouter } = require('./users');
const { docsRouter } = require('./api-docs');

const router = new Router();

router
// Default page
    .use('/', indexRoute)
// Test
    .use('/hello/', helloRoute)
// CRUD
    .use('/cats/', catsRouter)
// CRUD users
    .use('/users/', usersRouter)
// API docs
    .use('/api-docs', docsRouter);

module.exports = router;
