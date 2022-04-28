const {catsRouter, cats} = require('./index');

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
catsRouter.delete('/:catId', (req, res) => {
  const id = Number(req.params.catId);
  const index = cats.findIndex((cat) => cat.id === id);
  if (index === -1) {
    return res.status(404).send('Cat not found');
  }
  cats.splice(index, 1);
  res.status(200).send('Cat deleted, poor one');
});
