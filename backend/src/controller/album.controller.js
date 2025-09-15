const router = require('express').Router()
const { getByUserId } = require('../model/album.model')
const { arrayToJson } = require('../view/album.view')

router.get('/users/:userId/albums', async (req, res) => {
  const userId = req.params.userId

  const albums = await getByUserId(userId)
  const albumsJson = await arrayToJson(albums)

  res.json(albumsJson)
})

module.exports = router
