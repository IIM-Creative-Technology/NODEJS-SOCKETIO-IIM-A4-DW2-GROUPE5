const { Sequelize } = require('sequelize');
const { sequelizeInstance } = require('../utils/database');

const User = sequelizeInstance.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
})

module.exports = {
  User
}