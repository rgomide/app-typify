const router = require('express').Router()

router.get('/users/:userId/albums', (req, res) => {
  res.json({ message: 'albums', userId: req.params.userId })
})

module.exports = router
