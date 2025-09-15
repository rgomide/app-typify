const router = require('express').Router()
const { getByUserId, create, update } = require('../model/task.model')

router.get('/users/:userId/tasks', async (req, res) => {
  const tasks = await getByUserId(req.params.userId)

  res.json(tasks)
})

router.post('/tasks', async (req, res) => {
  const task = req.body
  const newTask = await create(task)

  res.json(newTask)
})

router.put('/tasks/:id', async (req, res) => {
  const task = req.body
  const taskId = req.params.id

  const updatedTask = await update(taskId, task)

  res.json(updatedTask)
})

module.exports = router
