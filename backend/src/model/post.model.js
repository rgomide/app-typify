const { query } = require('../config/db')

const getByUserId = async (userId) => {
  const result = await query(
    `
    SELECT posts.*, (SELECT COUNT(*) FROM comments WHERE comments.post_id = posts.id) AS comments_count FROM posts 
    WHERE posts.user_id = $1 
    ORDER BY posts.id
  `,
    [userId]
  )
  console.log(result.rows)
  return result.rows
}

module.exports = {
  getByUserId
}
