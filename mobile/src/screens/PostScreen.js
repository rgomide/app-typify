import { FlatList, ScrollView, StyleSheet } from 'react-native'
import PostCard from '../components/PostCard'

const PostScreen = (props) => {
  const posts = [
    {
      id: 1,
      title: 'Publicação 01',
      body: 'lorem ipsum dolor sit amet',
      comments: [
        {
          postId: 1,
          id: 1,
          name: 'Comment 01',
          email: 'comment01@example.com',
          body: 'lorem ipsum dolor sit amet'
        },
        {
          postId: 1,
          id: 2,
          name: 'Comment 02',
          email: 'comment02@example.com',
          body: 'lorem ipsum dolor sit amet'
        }
      ]
    },
    {
      id: 2,
      title: 'Publicação 02',
      body: 'lorem ipsum dolor sit amet',
      comments: [
        {
          postId: 2,
          id: 1,
          name: 'Comment 01',
          email: 'comment01@example.com',
          body: 'lorem ipsum dolor sit amet'
        }
      ]
    },
    {
      id: 3,
      title: 'Publicação 03',
      body: 'lorem ipsum dolor sit amet',
      comments: [
        {
          postId: 3,
          id: 1,
          name: 'Comment 01',
          email: 'comment01@example.com',
          body: 'lorem ipsum dolor sit amet'
        }
      ]
    },
    {
      id: 4,
      title: 'Publicação 04',
      body: 'lorem ipsum dolor sit amet',
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
