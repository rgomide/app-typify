const arrayToJson = (photos) => {
  const photosJson = []

  for (let i = 0; i < photos.length; i++) {
    const photo = objectToJson(photos[i])
    photosJson.push(photo)
  }

  return photosJson
}

const objectToJson = (photo) => {
  const { id, title, url, album_id: albumId } = photo
  return {
    id: id,
    title: title,
    url: url,
    albumId: albumId
  }
}

module.exports = {
  arrayToJson
}
