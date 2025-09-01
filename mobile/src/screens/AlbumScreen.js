import { FlatList, StyleSheet, View } from 'react-native'
import AlbumCard from '../components/AlbumCard'

const AlbumScreen = (props) => {
  const albums = [
    {
      userId: 1,
      id: 1,
      title: 'Álbum 01',
      photos: [
        {
          albumId: 1,
          id: 1,
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://picsum.photos/200/300?random=1'
        },
        {
          albumId: 1,
          id: 2,
          title: 'reprehenderit est deserunt velit ipsam',
          url: 'https://picsum.photos/200/300?random=2'
        },
        {
          albumId: 1,
          id: 3,
          title: 'officia porro iure quia iusto qui ipsa ut modi',
          url: 'https://picsum.photos/200/300?random=3'
        },
        {
          albumId: 1,
          id: 4,
          title: 'officia porro iure quia iusto qui ipsa ut modi',
          url: 'https://picsum.photos/200/300?random=5'
        },
        {
          albumId: 1,
          id: 5,
          title: 'officia porro iure quia iusto qui ipsa ut modi',
          url: 'https://picsum.photos/200/300?random=6'
        }
      ]
    },
    {
      userId: 1,
      id: 2,
      title: 'Álbum 02',
      photos: [
        {
          albumId: 2,
          id: 1,
          title: 'sunt qui excepturi placeat culpa',
          url: 'https://picsum.photos/200/300?random=4'
        }
      ]
    }
  ]

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
