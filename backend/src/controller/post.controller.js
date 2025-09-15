const router = require('express').Router()
const { getByUserId } = require('../model/post.model')

router.get('/users/:userId/posts', async (req, res) => {
  const userId = req.params.userId
  const posts = await getByUserId(userId)

  res.json(posts)
})

module.exports = router
