const { query } = require('../config/db')

const getByUserId = async (userId) => {
  const result = await query('SELECT * FROM tasks WHERE user_id = $1 ORDER BY id', [userId])
  return result.rows
}

const create = async (task) => {
  const { title, userId } = task
  const result = await query('INSERT INTO tasks (user_id, title) VALUES ($1, $2) RETURNING *', [
    userId,
    title
  ])
  return result.rows[0]
}

const update = async (taskId, task) => {
  const { title, completed } = task
  const result = await query(
    'UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *',
    [title, completed, taskId]
  )
  return result.rows[0]
}

module.exports = {
  getByUserId,
  create,
  update
}
