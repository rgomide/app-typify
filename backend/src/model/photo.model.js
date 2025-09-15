const { query } = require('../config/db')

const getByAlbumId = async (albumId) => {
  const result = await query('SELECT * FROM photos WHERE album_id = $1', [albumId])
  return result.rows
}

module.exports = {
  getByAlbumId
}
