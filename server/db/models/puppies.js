const Sequelize = require('sequelize');
const db = require('../db');

const Puppies = db.define('puppies', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    age: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Puppies;
