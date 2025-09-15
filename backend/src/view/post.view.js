const { getByPostId } = require('../model/comment.model')
const { toJson: toJsonComment } = require('./comment.view')

const arrayToJson = async (posts) => {
  const postsJson = []

  for (let i = 0; i < posts.length; i++) {
    const post = await objectToJson(posts[i])
    postsJson.push(post)
  }

  return postsJson
}

const objectToJson = async (post) => {
  const { id, title, content, user_id: userId, comments_count: commentsCount } = post

  const comments = await getByPostId(id)
  const commentsJson = await toJsonComment(comments)

  const postJson = {
    id: id,
    title: title,
    content: content,
    userId: userId,
    commentsCount: commentsCount,
    comments: commentsJson
  }

  return postJson
}

module.exports = {
  arrayToJson
}
