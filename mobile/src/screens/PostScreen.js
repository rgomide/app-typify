import { FlatList, ScrollView, StyleSheet } from 'react-native'
import PostCard from '../components/PostCard'

const PostScreen = (props) => {
  const posts = [
    {
      id: 1,
      title: 'Post 01',
      body: 'Post 01 body',
      comments: [
        {
          postId: 1,
          id: 1,
          name: 'Comment 01',
          email: 'comment01@example.com',
          body: 'Comment 01 body'
        },
        {
          postId: 1,
          id: 2,
          name: 'Comment 02',
          email: 'comment02@example.com',
          body: 'Comment 02 body'
        }
      ]
    },
    {
      id: 2,
      title: 'Post 02',
      body: 'Post 02 body',
      comments: [
        {
          postId: 2,
          id: 1,
          name: 'Comment 01',
          email: 'comment01@example.com',
          body: 'Comment 01 body'
        }
      ]
    },
    {
      id: 3,
      title: 'Post 03',
      body: 'Post 03 body',
      comments: [
        {
          postId: 3,
          id: 1,
          name: 'Comment 01',
          email: 'comment01@example.com',
          body: 'Comment 01 body'
        }
      ]
    },
    {
      id: 4,
      title: 'Post 04',
      body: 'Post 04 body',
      comments: []
    }
  ]

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        contentContainerStyle={styles.listContent}
        renderItem={(element) => {
          const post = element.item
          return <PostCard post={post} />
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eef'
  },
  listContent: {
    width: '100%',
    gap: 10
  }
})

export default PostScreen
