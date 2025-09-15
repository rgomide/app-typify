const router = require('express').Router()
const { getAll } = require('../model/user.model')

router.get('/users', async (req, res) => {
  const users = await getAll()
  res.json(users)
})

module.exports = router
