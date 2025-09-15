const { getByAlbumId } = require('../model/photo.model')
const { arrayToJson: arrayToJsonPhoto } = require('./photo.view')

const arrayToJson = async (albums) => {
  const albumsJson = []

  for (let i = 0; i < albums.length; i++) {
    const album = await objectToJson(albums[i])
    albumsJson.push(album)
  }

  return albumsJson
}

const objectToJson = async (album) => {
  const { id, title, user_id: userId } = album
  const photos = await getByAlbumId(id)
  const photosJson = await arrayToJsonPhoto(photos)
  return {
    id: id,
    title: title,
    userId: userId,
    photos: photosJson
  }
}

module.exports = {
  arrayToJson
}
