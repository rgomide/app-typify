import { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native'
import PostCard from '../components/PostCard'
import useServer from '../hooks/useServer'

const PostScreen = (props) => {
  const { userId } = props.route.params
  const { getPostsByUser } = useServer()

  const fetchPosts = async () => {
    const posts = await getPostsByUser(userId)
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const [posts, setPosts] = useState([])

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
