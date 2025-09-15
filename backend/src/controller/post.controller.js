const router = require('express').Router()
const { getByUserId } = require('../model/post.model')
const { arrayToJson } = require('../view/post.view')

router.get('/users/:userId/posts', async (req, res) => {
  const userId = req.params.userId

  const posts = await getByUserId(userId)
  const postsJson = await arrayToJson(posts)

  res.json(postsJson)
})

module.exports = router
