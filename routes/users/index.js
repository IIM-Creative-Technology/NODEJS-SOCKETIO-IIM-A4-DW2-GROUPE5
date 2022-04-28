/**
 * Route : users
 */

const {Router, json} = require('express');
const {User} = require('../../models/users');
const usersRouter = new Router();
usersRouter.use(json());

/**
 * @openapi
 * /cats/:
 *   get:
 *     summary: Gets the list of users.
 *     description: Gets the list of users.
 *     responses:
 *       200:
 *         description: Returns an array containing users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                      description: The user's id
 *                      example: 1
 *                    name:
 *                      type: string
 *                      description: The user's race name
 *                      example: 'Persan'
 *                    description:
 *                      type: string
 *                      description: A short description for the user.
 *                      example: 'Blue eyes'
 *       500:
 *          description: No user was found.
 */
usersRouter.get('/', async (req, res) => {
  try {
    const ALL = await User.findAll();
    console.log(
        'OK getAll USER: ',
        ALL.map((el) => el.dataValues),
    );
    return res.status(200).json(ALL);
  } catch (error) {
    console.log('ERROR in getAll ' + 'USER:', error);
    return res.status(500).json(error);
  }
});

/**
 * @openapi
 * /users/:
 *   post:
 *     summary: Adds one user.
 *     description: Adds one user.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 id:
 *                   type: integer
 *                   description: The user's id
 *                   example: 2
 *                 username:
 *                   type: string
 *                   description: A name for the user.
 *                   example: 'David'
 *                 email:
 *                   type: string
 *                   description: An email for the user.
 *                   example: 'David'
 *                 password:
 *                   type: string
 *                   description: A password for the user.
 *                   example: 'testPassword'
 *     responses:
 *       201:
 *         description: The user was added to the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user's id
 *                   example: 2
 *                 username:
 *                   type: string
 *                   description: A name for the user.
 *                   example: 'David'
 *                 email:
 *                   type: string
 *                   description: An email for the user.
 *                   example: 'David'
 *                 password:
 *                   type: string
 *                   description: A password for the user.
 *                   example: 'testPassword'
 *       500:
 *          description: This user wasn't found.
 *       404:
 *          description: Bad request.
 */
usersRouter.post('/', async (req, res) => {
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    try {
      const user = await User.create(USER_MODEL);
      console.log('OK createOne USER: ', user);
      return res.status(201).json(user);
    } catch (error) {
      console.log('ERROR in createOne ' + 'USER:', error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json('Bad Request');
  }
});

/**
 * @openapi
 * /users/:userId:
 *   get:
 *     summary: Gets one user.
 *     description: Gets one user.
 *     responses:
 *       200:
 *         description: Returns an JSON describing a user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user's id
 *                   example: 2
 *                 username:
 *                   type: string
 *                   description: A name for the user.
 *                   example: 'David'
 *                 email:
 *                   type: string
 *                   description: An email for the user.
 *                   example: 'David'
 *                 password:
 *                   type: string
 *                   description: A password for the user.
 *                   example: 'testPassword'
 *       500:
 *          description: This user wasn't found.
 */
usersRouter.get('/:userId', async (req, res) => {
  try {
    const u = await User.findByPk(req.params.userId);
    console.log('OK getOne USER: ', u.dataValues);
    return res.status(200).json(u);
  } catch (error) {
    console.log('ERROR in getOne ' + 'USER:', error);
    return res.status(500).json(error);
  }
});

/**
 * @openapi
 * /users/:userId:
 *   delete:
 *     summary: Removes one user from the database.
 *     description: Removes one user from the database.
 *     responses:
 *       200:
 *         description: The user was deleted.
 *       500:
 *          description: This user wasn't found.
 */
usersRouter.delete('/:userId', async (req, res) => {
  try {
    const u = await User.destroy({where: {id: req.params.userId}});
    console.log('OK deleteOne USER: ');
    return res.status(200).json(u);
  } catch (error) {
    console.log('ERROR in deleteOne ' + 'USER:', error);
    return res.status(500).json(error);
  }
});

/**
 * @openapi
 * /users/:userId:
 *   put:
 *     summary: Updates the description for one user.
 *     description: Updates the description for one user.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: id of the user to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 id:
 *                   type: integer
 *                   description: The user's id
 *                   example: 2
 *                 username:
 *                   type: string
 *                   description: A name for the user.
 *                   example: 'David'
 *                 email:
 *                   type: string
 *                   description: An email for the user.
 *                   example: 'David'
 *                 password:
 *                   type: string
 *                   description: A password for the user.
 *                   example: 'testPassword'
 *
 *     responses:
 *       200:
 *         description: The user was updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user's id
 *                   example: 2
 *                 username:
 *                   type: string
 *                   description: A name for the user.
 *                   example: 'David'
 *                 email:
 *                   type: string
 *                   description: An email for the user.
 *                   example: 'David'
 *                 password:
 *                   type: string
 *                   description: A password for the user.
 *                   example: 'testPassword'
 *       500:
 *          description: This user wasn't found.
 *       404:
 *          description: Bad request.
 */
usersRouter.put('/:userId', async (req, res) => {
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    try {
      const u = await User.update(USER_MODEL, {where: {id: req.params.userId}});
      console.log('OK updateOne USER: ', u);
      return res.status(200).json(u);
    } catch (error) {
      console.log('ERROR in updateOne ' + 'USER:', error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json('Bad Request');
  }
});

module.exports = {usersRouter};
