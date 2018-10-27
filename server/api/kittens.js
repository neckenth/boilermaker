const router = require('express').Router()
//don't forget to require model here later

router.get('/', async (req, res, next) => {
    try {
        const kittens = await Kittens.findAll()
        res.status(200).send(kittens)
    } catch (error) {next(error)}
})

router.post('/', async (req, res, next) => {
    try {
        const [newKitten] = await Kittens.create({
            where: {
                name: req.body.name,
            }
        })
        res.status(201).send(newKitten)
    } catch (error) {next (error)}
})

router.get('/:kittenId', async (req, res, next) => {
    try {
        const oneKitten = await Kittens.findById(req.params.kittenId)
        res.status(200).send(oneKitten)
    } catch (error) {next(error)}

})

router.delete(':/kittenId', async (req, res, next) => {
    try {
        await Kittens.destroy({
            where: {
                id: req.params.kittenId
            }
        })
        res.status(204).end()
    } catch (error) { next(error) }
})

module.exports = router;