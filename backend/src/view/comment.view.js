const toJson = (comments) => {
  return comments.map((comment) => {
    const { id, content, user_id: userId, post_id: postId } = comment
    return {
      id: id,
      content: content,
      userId: userId,
      postId: postId
    }
  })
}

module.exports = {
  toJson
}
