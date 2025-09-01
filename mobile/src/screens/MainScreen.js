import { Button, StyleSheet, View } from 'react-native'

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
    <View>
      <Button title="Posts" onPress={navigateToPostScreen} />
      <Button title="To Do" onPress={navigateToTaskScreen} />
      <Button title="Albums" onPress={navigateToAlbumScreen} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default MainScreen
