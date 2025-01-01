const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tru2u', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;2