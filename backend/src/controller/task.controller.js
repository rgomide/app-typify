const router = require('express').Router()
const { getByUserId, create, update } = require('../model/task.model')
const { arrayToJson, objectToJson } = require('../view/task.view')

router.get('/users/:userId/tasks', async (req, res) => {
  const tasks = await getByUserId(req.params.userId)
  const tasksJson = arrayToJson(tasks)

  res.json(tasksJson)
})

router.post('/tasks', async (req, res) => {
  const task = req.body

  const newTask = await create(task)
  const newTaskJson = objectToJson(newTask)

  res.json(newTaskJson)
})

router.put('/tasks/:id', async (req, res) => {
  const task = req.body
  const taskId = req.params.id

  const updatedTask = await update(taskId, task)
  const updatedTaskJson = objectToJson(updatedTask)

  res.json(updatedTaskJson)
})

module.exports = router
