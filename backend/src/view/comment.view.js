const toJson = (comments) => {
  return comments.map((comment) => {
    const { id, content, user_id: userId, post_id: postId, user_name: userName } = comment
    return {
      id: id,
      content: content,
      userName: userName,
      userId: userId,
      postId: postId
    }
  })
}

module.exports = {
  toJson
}
