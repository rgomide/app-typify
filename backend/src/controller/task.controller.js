const router = require('express').Router()

router.get('/users/:userId/tasks', (req, res) => {
  res.json({ message: 'tasks', userId: req.params.userId })
})

router.post('/tasks', (req, res) => {
  res.json({ message: 'tasks' })
})

router.put('/tasks/:id', (req, res) => {
  res.json({ message: 'tasks', id: req.params.id })
})

module.exports = router
