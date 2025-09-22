import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import AlbumCard from '../components/AlbumCard'
import useServer from '../hooks/useServer'

const AlbumScreen = (props) => {
  const { userId } = props.route.params

  const { getAlbumsByUser } = useServer()

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetchAlbums()
  }, [])

  const fetchAlbums = async () => {
    const albums = await getAlbumsByUser(userId)
    setAlbums(albums)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        keyExtractor={(album) => album.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={(element) => {
          const album = element.item
          return <AlbumCard album={album} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eef'
  },
  listContent: {
    width: '100%',
    gap: 10
  }
})

export default AlbumScreen
