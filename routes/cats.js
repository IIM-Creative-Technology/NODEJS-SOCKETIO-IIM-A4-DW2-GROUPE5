/**
 * Route : cats
 */

const express = require('express')
const router = express.Router()
router.use(express.json())

//Test data
const cats = [
    {id: 1, name: 'Persan', description: 'Blue eyes'},
    {id: 2, name: 'Munchkin', description: 'Short legs'},
    {id: 3, name: 'Ragdoll', description: 'Long hair'},
    {id: 4, name: 'British shorthair', description: 'Not so short hair'}
]

router
    .get('/', (req, res) => {
        if (!cats || cats.length == 0) {
            return res.status(404).send('No cat not found')
        }
        res.json(cats)
    })
    .get('/:catId', (req, res) => {
        const id = Number(req.params.catId)
        const cat = cats.find(cat => cat.id === id)
        if (!cat) {
            return res.status(404).send('Cat not found')
        }
        res.json(cat)
    })
    .post('/', (req, res) => {
        const newCat = {
            id: cats.length + 1,
            name: req.body.name,
            description: req.body.description
        }
        cats.push(newCat)
        res.status(201).json(newCat)
    })
    .put('/:catId', (req, res) => {
        const id = Number(req.params.catId)
        const index = cats.findIndex(cat => cat.id === id)
        if (index === -1) {
            return res.status(404).send('Cat not found')
        }
        const updatedCat = {
            id: cats[index].id,
            name: req.body.name,
            description: req.body.description
        }
        cats[index] = updatedCat
        res.status(200).json('Cat updated')
    })
    .delete('/:catId', (req, res) => {
        const id = Number(req.params.catId)
        const index = cats.findIndex(cat => cat.id === id)
            if (index === -1) {
            return res.status(404).send('Cat not found')
        }
        cats.splice(index,1)
        res.status(200).json('Cat deleted, poor one')
    })

module.exports = router;