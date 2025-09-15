const router = require('express').Router()
const { getByPostId } = require('../model/comment.model')

router.get('/posts/:postId/comments', async (req, res) => {
  const postId = req.params.postId
  const comments = await getByPostId(postId)

  res.json(comments)
})

module.exports = router
