const {catsRouter, cats} = require("./index");

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
catsRouter.put('/:catId', (req, res) => {
    const id = Number(req.params.catId)
    const index = cats.findIndex(cat => cat.id === id)
    if (index === -1) {
        return res.status(404).send('Cat not found')
    }
    cats[index] = {
        id: cats[index].id, name: req.body.name, description: req.body.description
    }
    res.status(200).json(cats[index])
});
