'use strict'

const db = require('./db')
const Puppies = require('./models/puppies')
const Kittens = require('./models/kittens')
const Users = require('./models/users')

Users.hasMany(Puppies)
Puppies.belongsTo(Users)
Kittens.belongsTo(Users)

module.exports = {
    db,
    Puppies,
    Kittens,
    Users
}