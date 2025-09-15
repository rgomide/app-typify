const router = require('express').Router()
const { getByUserId } = require('../model/album.model')

router.get('/users/:userId/albums', async (req, res) => {
  const userId = req.params.userId
  const albums = await getByUserId(userId)

  res.json(albums)
})

module.exports = router
