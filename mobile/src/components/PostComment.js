import { StyleSheet, Text, View } from 'react-native'

const PostComment = (props) => {
  const comment = props.comment

  return (
    <View style={styles.container}>
      <Text>{comment.body}</Text>
      <View>
        <Text>
          {comment.name} - {comment.email}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff'
  }
})

export default PostComment
