import { StyleSheet, Text, View } from 'react-native'
import ImageButton from '../components/ImageButton'

const MainScreen = (props) => {
  const navigation = props.navigation

  const navigateToAlbumScreen = () => {
    navigation.navigate('Album')
  }

  const navigateToTaskScreen = () => {
    navigation.navigate('Task')
  }

  const navigateToPostScreen = () => {
    navigation.navigate('Post')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>
      <ImageButton
        title="Posts"
        image={require('../../assets/images/posts.svg')}
        onPress={navigateToPostScreen}
      />
      <ImageButton
        title="To Do"
        image={require('../../assets/images/to-do.svg')}
        onPress={navigateToTaskScreen}
      />
      <ImageButton
        title="Albums"
        image={require('../../assets/images/albums.svg')}
        onPress={navigateToAlbumScreen}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111'
  }
})

export default MainScreen
