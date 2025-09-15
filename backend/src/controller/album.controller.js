const router = require('express').Router()

router.get('/albums', (req, res) => {
  res.json({ message: 'albums' })
})

module.exports = router
