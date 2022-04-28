const {catsRouter, cats} = require('./index');

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
catsRouter.post('/', (req, res) => {
  const newCat = {
    id: cats.length + 1, name: req.body.name, description: req.body.description,
  };
  cats.push(newCat);
  res.status(201).json(newCat);
});
