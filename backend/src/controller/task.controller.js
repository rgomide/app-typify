const router = require('express').Router()

router.get('/tasks', (req, res) => {
  res.json({ message: 'tasks' })
})

router.post('/tasks', (req, res) => {
  res.json({ message: 'tasks' })
})

router.put('/tasks/:id', (req, res) => {
  res.json({ message: 'tasks' })
})

module.exports = router
