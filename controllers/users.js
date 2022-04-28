const { sequelizeInstance } = require('../utils/database');
const { User } = require('../models/users');

/**
 * CRUD CONTROLLERS
 */

async function createOne(req, res, next) {
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
}

async function getAll(req, res, next) {
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
}

async function getOne(req, res, next) {
  try {
    const u = await User.findByPk(req.params.id);
    console.log('OK getOne USER: ', u.dataValues);
    return res.status(200).json(u);
  } catch (error) {
    console.log('ERROR in getOne ' + 'USER:', error);
    return res.status(500).json(error);
  }
}

async function updateOne(req, res, next) {
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    try {
      const u = await User.update(USER_MODEL, { where: { id: req.params.id } });
      console.log('OK updateOne USER: ', u);
      return res.status(200).json(u);
    } catch (error) {
      console.log('ERROR in updateOne ' + 'USER:', error);
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(400).json('Bad Request');
  }
}

async function deleteOne(req, res, next) {
  try {
    const u = await User.destroy({ where: { id: req.params.id } });
    console.log('OK deleteOne USER: ');
    return res.status(200).json(u);
  } catch (error) {
    console.log('ERROR in deleteOne ' + 'USER:', error);
    return res.status(500).json(error);
  }
}

function next() {
  throw new Error('Function not implemented.');
}

module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
  next,
};
