import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Task = (props) => {
  const task = props.task

  const [completed, setCompleted] = useState(task.completed)

  const handlePress = () => {
    console.log('pressed')
    setCompleted(!completed)
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.checkboxContainer} onPress={handlePress}>
        <Checkbox
          style={styles.checkbox}
          value={completed}
          onValueChange={setCompleted}
          color="#eef"
        />
        <Text style={completed ? styles.completedText : styles.text}>{task.title}</Text>
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
