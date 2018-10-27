const router = require('express').Router()
const Puppies = require('../db/models/puppies')

router.get('/', async (req, res, next) => {
    try {
        const puppies = await Puppies.findAll()
        res.status(200).send(puppies)
    } catch (error) {next(error)}
})

router.post('/', async (req, res, next) => {
    try {
        const [newPuppy] = await Puppies.create({
            where: {
                name: req.body.name,
            }
        })
        res.status(201).send(newPuppy)
    } catch (error) {next (error)}
})

router.get('/:puppyId', async (req, res, next) => {
    try {
        const onePuppy = await Puppies.findById(req.params.puppyId)
        res.status(200).send(onePuppy)
    } catch (error) {next(error)}

})

router.delete(':/puppyId', async (req, res, next) => {
    try {
        await Puppies.destroy({
            where: {
                id: req.params.puppyId
            }
        })
        res.status(204).end()
    } catch (error) { next(error) }
})

module.exports = router;