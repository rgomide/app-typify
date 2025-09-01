import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageButton from '../components/ImageButton'

const MainScreen = (props) => {
  const navigation = props.navigation

  const [users, setUsers] = useState([
    { id: 1, name: 'Usuário 01' },
    { id: 2, name: 'Usuário 02' },
    { id: 3, name: 'Usuário 03' },
    { id: 4, name: 'Usuário 04' }
  ])

  const navigateToAlbumScreen = () => {
    navigation.navigate('Album')
  }

  const navigateToTaskScreen = () => {
    navigation.navigate('Task')
  }

  const navigateToPostScreen = () => {
    navigation.navigate('Post')
  }

  const handleChangeUser = (itemValue) => {
    console.log(itemValue)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuário</Text>
      <Picker onValueChange={handleChangeUser} style={styles.picker}>
        {users.map((user) => (
          <Picker.Item key={user.id} label={user.name} value={user.id} />
        ))}
      </Picker>
      <ImageButton
        title="Publicações"
        image={require('../../assets/images/posts.svg')}
        onPress={navigateToPostScreen}
      />
      <ImageButton
        title="Tarefas"
        image={require('../../assets/images/to-do.svg')}
        onPress={navigateToTaskScreen}
      />
      <ImageButton
        title="Álbuns"
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
  },
  picker: {
    width: '100%',
    padding: 10
  }
})

export default MainScreen
