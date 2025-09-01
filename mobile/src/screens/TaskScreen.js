import { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import ImageButton from '../components/ImageButton'
import Task from '../components/Task'

const TaskScreen = (props) => {
  const [taskTitle, setTaskTitle] = useState('')

  const tasks = [
    { id: 1, title: 'Task 01', completed: true },
    { id: 2, title: 'Task 02', completed: false },
    { id: 3, title: 'Task 03', completed: false },
    { id: 4, title: 'Task 04', completed: false },
    { id: 5, title: 'Task 05', completed: false },
    { id: 6, title: 'Task 06', completed: true },
    { id: 7, title: 'Task 07', completed: false },
    { id: 8, title: 'Task 08', completed: true },
    { id: 9, title: 'Task 09', completed: true },
    { id: 10, title: 'Task 10', completed: false }
  ]

  const handleAddTask = () => {
    console.log('add task')
    console.log(taskTitle)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.addTaskContainer}>
        <TextInput style={styles.addTaskInput} value={taskTitle} onChangeText={setTaskTitle} />
        <ImageButton
          title="Add Task"
          justifyContent="center"
          image={require('../../assets/images/add.svg')}
          onPress={handleAddTask}
        />
      </View>
      <FlatList
        data={tasks}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        key={(task) => task.id}
        renderItem={(element) => {
          const task = element.item
          return <Task task={task} />
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eef',
    width: '100%'
  },
  list: {
    width: '100%'
  },
  listContent: {
    width: '100%',
    gap: 10
  },
  addTaskContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addTaskInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 5
  }
})

export default TaskScreen
