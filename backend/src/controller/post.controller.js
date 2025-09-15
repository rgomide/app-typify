const router = require('express').Router()

router.get('/posts', (req, res) => {
  res.json({ message: 'posts' })
})

module.exports = router
