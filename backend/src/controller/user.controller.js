const router = require('express').Router()

router.get('/users', (req, res) => {
  res.json({ message: 'users' })
})

module.exports = router
