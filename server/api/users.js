const router = require('express').Router()
const Users = require('../db/models/users')

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.findAll()
        res.status(200).send(users)
    } catch (error) {next(error)}
})

router.post('/', async (req, res, next) => {
    try {
        const [newUser] = await Users.create({
            where: {
                lastName: req.body.lastName,
                firstName: req.body.firstName,
            }
        })
        res.status(201).send(newUser)
    } catch (error) {next (error)}
})

router.get('/:userId', async (req, res, next) => {
    try {
        const oneUser = await Users.findById(req.params.userId)
        res.status(200).send(oneUser)
    } catch (error) {next(error)}

})

router.delete(':/userId', async (req, res, next) => {
    try {
        await Users.destroy({
            where: {
                id: req.params.userId
            }
        })
        res.status(204).end()
    } catch (error) { next(error) }
})

module.exports = router;