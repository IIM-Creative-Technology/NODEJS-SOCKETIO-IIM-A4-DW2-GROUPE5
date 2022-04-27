const express = require('express')
const router = express.Router()

router
    .get('/', (req, res) => {
        res.json({ message: 'Welcome to the index route !' })
    })
    .post('/', (req, res) => {
        res.json({ message: 'Post' })
    })
    .put('/', (req,res) => {
        res.json({ message: 'Put' })
    })
    .delete('/', (req, res) => {
        res.json({ message: 'Delete' })
    })

module.exports = router;
