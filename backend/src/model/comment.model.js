const { query } = require('../config/db')

const getByPostId = async (postId) => {
  const result = await query(
    `
    SELECT comments.*, users.name AS user_name FROM comments 
    INNER JOIN users ON comments.user_id = users.id
    WHERE post_id = $1
    ORDER BY comments.id
    `,
    [postId]
  )
  return result.rows
}

module.exports = {
  getByPostId
}
