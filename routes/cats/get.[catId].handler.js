const {catsRouter, cats} = require('./index');

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
catsRouter.get('/:catId', (req, res) => {
  const id = Number(req.params.catId);
  const cat = cats.find((cat) => cat.id === id);
  if (!cat) {
    return res.status(404).send('Cat not found');
  }
  res.json(cat);
});
