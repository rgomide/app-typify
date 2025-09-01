import { StyleSheet, Text, View } from 'react-native'

const PostComment = (props) => {
  const comment = props.comment

  return (
    <View style={styles.container}>
      <Text style={styles.body}>{comment.body}</Text>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>
          {comment.name} - {comment.email}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    gap: 5
  },
  body: {
    fontSize: 14
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  name: {
    fontSize: 8,
    color: '#aaa'
  }
})

export default PostComment
