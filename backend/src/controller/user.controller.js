const router = require('express').Router()
const { getAll } = require('../model/user.model')
const { arrayToJson } = require('../view/user.view')

router.get('/users', async (req, res) => {
  const users = await getAll()
  const usersJson = arrayToJson(users)

  res.json(usersJson)
})

module.exports = router
