const Sequelize = require('sequelize')
require('dotenv').config();

const {
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PORT,
    DB_PASSWORD
} = process.env;

const sequelizeInstance = new Sequelize({
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
        require: true,
        rejectUnauthorized: false
        }
    },
});

module.exports= {
    sequelizeInstance
}