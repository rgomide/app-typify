import Checkbox from 'expo-checkbox'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Task = (props) => {
  const task = props.task
  const onTaskToggled = props.onTaskToggled

  const handlePress = () => {
    task.completed = !task.completed
    onTaskToggled(task)
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.checkboxContainer} onPress={() => handlePress()}>
        <Checkbox style={styles.checkbox} value={task.completed} color="#eef" />
        <Text style={task.completed ? styles.completedText : styles.text}>{task.title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%'
  },
  checkbox: {
    marginRight: 10
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#bbb'
  },
  text: {
    color: '#000'
  }
})

export default Task
