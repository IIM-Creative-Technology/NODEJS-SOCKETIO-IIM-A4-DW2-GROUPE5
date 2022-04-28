/**
 * Route : cats
 */

const express = require('express')
const catsRouter = express.Router()
catsRouter.use(express.json())

// Test data
const cats = [
    {id: 1, name: 'Persan', description: 'Blue eyes'},
    {id: 2, name: 'Munchkin', description: 'Short legs'},
    {id: 3, name: 'Ragdoll', description: 'Long hair'},
    {id: 4, name: 'British shorthair', description: 'Not so short hair'}
];

catsRouter
    /**
     * @openapi
     * /cats/:catId:
     *   get:
     *     summary: Gets one cat.
     *     description: Gets one cat.
     *     responses:
     *       200:
     *         description: Returns an JSON describing a cat.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                   description: The cat's id
     *                   example: 2
     *                 name:
     *                   type: string
     *                   description: The cat's race name
     *                   example: 'Munchkin'
     *                 description:
     *                   type: string
     *                   description: A short description for the cat.
     *                   example: 'Short legs'
     *       404:
     *          description: This cat wasn't found.
     */
    .get('/:catId', (req, res) => {
        const id = Number(req.params.catId)
        const cat = cats.find(cat => cat.id === id)
        if (!cat) {
            return res.status(404).send('Cat not found')
        }
        res.json(cat)
    })
    /**
     * @openapi
     * /cats/:
     *   post:
     *     summary: Adds one cat.
     *     description: Adds one cat.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               id:
     *                 type: integer
     *                 description: The cat's id
     *                 example: 5
     *               name:
     *                 type: string
     *                 description: The cat's race name
     *                 example: 'British shorthair'
     *               description:
     *                 type: string
     *                 description: A short description for the cat.
     *                 example: 'Not so short hair'
     *     responses:
     *       201:
     *         description: The cat was added to the database.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                   description: The cat's id
     *                   example: 3
     *                 name:
     *                   type: string
     *                   description: The cat's race name
     *                   example: 'British shorthair'
     *                 description:
     *                   type: string
     *                   description: A short description for the cat.
     *                   example: 'Not so short hair'
     */
    .post('/', (req, res) => {
        const newCat = {
            id: cats.length + 1, name: req.body.name, description: req.body.description
        }
        cats.push(newCat)
        res.status(201).json(newCat)
    })
    /**
     * @openapi
     * /cats/:catId:
     *   put:
     *     summary: Updates the description for one cat.
     *     description: Updates the description for one cat.
     *     parameters:
     *       - in: path
     *         name: catId
     *         required: true
     *         description: id of the cat to update
     *         schema:
     *           type: integer
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               id:
     *                 type: integer
     *                 description: The cat's id
     *                 example: 4
     *               name:
     *                 type: string
     *                 description: The cat's race name
     *                 example: 'Ragdoll'
     *               description:
     *                 type: string
     *                 description: A short description for the cat.
     *                 example: 'Long hair'
     *
     *     responses:
     *       200:
     *         description: The cat was updated.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: integer
     *                   description: The cat's id
     *                   example: 4
     *                 name:
     *                   type: string
     *                   description: The cat's race name
     *                   example: 'Ragdoll'
     *                 description:
     *                   type: string
     *                   description: A short description for the cat.
     *                   example: 'Long hair'
     *       404:
     *          description: This cat wasn't found.
     */
    .put('/:catId', (req, res) => {
        const id = Number(req.params.catId)
        const index = cats.findIndex(cat => cat.id === id)
        if (index === -1) {
            return res.status(404).send('Cat not found')
        }
        cats[index] = {
            id: cats[index].id, name: req.body.name, description: req.body.description
        }
        res.status(200).json(cats[index])
    })
    /**
     * @openapi
     * /cats/:catId:
     *   delete:
     *     summary: Removes one cat from the database.
     *     description: Removes one cat from the database.
     *     responses:
     *       200:
     *         description: The cat was deleted.
     *       404:
     *          description: This cat wasn't found.
     */
    .delete('/:catId', (req, res) => {
        const id = Number(req.params.catId)
        const index = cats.findIndex(cat => cat.id === id)
        if (index === -1) {
            return res.status(404).send('Cat not found')
        }
        cats.splice(index, 1)
        res.status(200).send('Cat deleted, poor one')
    })

module.exports = {catsRouter: catsRouter, cats};
