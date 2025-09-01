import { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PostComment from './PostComment'

const PostCard = (props) => {
  const post = props.post

  const imgArrowRight = require('../../assets/images/expand-right.svg')
  const imgArrowDown = require('../../assets/images/expand-down.svg')

  const [showComments, setShowComments] = useState(false)

  const handleShowComments = () => {
    setShowComments(!showComments)
  }

  const accordionTitle = showComments
    ? 'Esconder comentarios'
    : `Mostrar comentarios (${post.comments.length})`
  const accordionImage = showComments ? imgArrowDown : imgArrowRight

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>

      <View style={styles.accordionContainer}>
        <TouchableOpacity style={styles.accordion} onPress={handleShowComments}>
          <Image style={styles.buttonImage} source={accordionImage} />
          <Text>{accordionTitle}</Text>
        </TouchableOpacity>

        {showComments && (
          <FlatList
            data={post.comments}
            keyExtractor={(comment) => comment.id.toString()}
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={(element) => {
              const comment = element.item
              return <PostComment comment={comment} />
            }}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    gap: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 16
  },
  listContainer: {
    paddingTop: 10
  },
  list: {
    width: '100%'
  },
  accordionContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  accordion: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc'
  },
  buttonImage: {
    width: 24,
    height: 24
  }
})

export default PostCard
