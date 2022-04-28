const {catsRouter, cats} = require('./index');

/**
 * @openapi
 * /cats/:
 *   get:
 *     summary: Gets the list of cats.
 *     description: Gets the list of cats.
 *     responses:
 *       200:
 *         description: Returns an array containing cats.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                      description: The cat's id
 *                      example: 1
 *                    name:
 *                      type: string
 *                      description: The cat's race name
 *                      example: 'Persan'
 *                    description:
 *                      type: string
 *                      description: A short description for the cat.
 *                      example: 'Blue eyes'
 *       404:
 *          description: No cat was found.
 */
catsRouter.get('/', (req, res) => {
  if (!cats || cats.length === 0) {
    return res.status(404).send('No cat not found');
  }
  res.json(cats);
});
