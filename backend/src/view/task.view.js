const arrayToJson = (tasks) => {
  const tasksJson = []
  for (let i = 0; i < tasks.length; i++) {
    const task = objectToJson(tasks[i])
    tasksJson.push(task)
  }
  return tasksJson
}

const objectToJson = (task) => {
  const { id, title, completed, user_id: userId } = task
  return {
    id: id,
    title: title,
    completed: completed,
    userId: userId
  }
}

module.exports = {
  arrayToJson,
  objectToJson
}
