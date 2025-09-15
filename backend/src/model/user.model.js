const { query } = require('../config/db')

const getAll = async () => {
  const result = await query('SELECT * FROM users')
  return result.rows
}

module.exports = { getAll }
