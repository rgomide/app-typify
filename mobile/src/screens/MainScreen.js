import { Picker } from '@react-native-picker/picker'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageButton from '../components/ImageButton'
import useServer from '../hooks/useServer'

const MainScreen = (props) => {
  const navigation = props.navigation

  const [userId, setUserId] = useState(null)
  const { getUsers } = useServer()

  const fetchUsers = async () => {
    const users = await getUsers()

    setUsers(users)

    if (users.length > 0) {
      setUserId(users[0].id)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const [users, setUsers] = useState([])

  const navigateToAlbumScreen = () => {
    navigation.navigate('Album', { userId })
  }

  const navigateToTaskScreen = () => {
    navigation.navigate('Task', { userId })
  }

  const navigateToPostScreen = () => {
    navigation.navigate('Post', { userId })
  }

  const handleChangeUser = (itemValue) => {
    setUserId(itemValue)
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
