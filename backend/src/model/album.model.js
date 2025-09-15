const { query } = require('../config/db')

const getByUserId = async (userId) => {
  const result = await query('SELECT * FROM albums WHERE user_id = $1', [userId])
  return result.rows
}

module.exports = {
  getByUserId
}
