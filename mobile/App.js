import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import AlbumScreen from './src/screens/AlbumScreen'
import MainScreen from './src/screens/MainScreen'
import PostScreen from './src/screens/PostScreen'
import TaskScreen from './src/screens/TaskScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerStyle: { backgroundColor: '#ddf' } }}
      >
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Publicações' }} />
        <Stack.Screen name="Task" component={TaskScreen} options={{ title: 'Tarefas' }} />
        <Stack.Screen name="Album" component={AlbumScreen} options={{ title: 'Álbuns' }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
