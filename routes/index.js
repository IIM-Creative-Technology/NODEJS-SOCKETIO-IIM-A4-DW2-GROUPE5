/**
 * Route : index
 */

const express = require('express')
const router = express.Router()

router
    .get('/', (req, res) => {
        res.json({ message: 'Welcome to the index route !' })
    })
    .post('/', (req, res) => {
        res.json({ message: 'Index - Post' })
    })
    .put('/', (req,res) => {
        res.json({ message: 'Index - Put' })
    })
    .delete('/', (req, res) => {
        res.json({ message: 'Index - Delete' })
    })

module.exports = router;