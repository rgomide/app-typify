const arrayToJson = (users) => {
  const usersJson = []

  for (let i = 0; i < users.length; i++) {
    const user = objectToJson(users[i])
    usersJson.push(user)
  }

  return usersJson
}

const objectToJson = (user) => {
  const { id, name, email } = user
  return {
    id: id,
    name: name,
    email: email
  }
}

module.exports = {
  arrayToJson,
  objectToJson
}
