const toJson = (comments) => {
  return comments.map((comment) => {
    const {
      id,
      content,
      user_id: userId,
      post_id: postId,
      user_name: userName,
      user_email: userEmail
    } = comment
    return {
      id: id,
      content: content,
      userName: userName,
      userEmail: userEmail,
      userId: userId,
      postId: postId
    }
  })
}

module.exports = {
  toJson
}
