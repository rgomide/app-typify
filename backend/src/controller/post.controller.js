const router = require('express').Router()

router.get('/users/:userId/posts', (req, res) => {
  res.json({ message: 'posts', userId: req.params.userId })
})

module.exports = router
