import { FlatList, StyleSheet, Text, View } from 'react-native'
import PhotoButton from './PhotoButton'

const AlbumCard = (props) => {
  const album = props.album

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{album.title}</Text>
      <FlatList
        data={album.photos}
        keyExtractor={(photo) => photo.id}
        style={styles.list}
        renderItem={(element) => {
          const photo = element.item
          return <PhotoButton photo={photo} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  list: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10
  }
})

export default AlbumCard
