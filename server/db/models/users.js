const Sequelize = require('sequelize');
const db = require('../db');

const Users = db.define('users', {
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING
    }
})

module.exports = Users;