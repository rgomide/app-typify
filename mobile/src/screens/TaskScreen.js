import { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import ImageButton from '../components/ImageButton'
import Task from '../components/Task'

const TaskScreen = (props) => {
  const [taskTitle, setTaskTitle] = useState('')

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarefa 01', completed: true },
    { id: 2, title: 'Tarefa 02', completed: false },
    { id: 3, title: 'Tarefa 03', completed: false },
    { id: 4, title: 'Tarefa 04', completed: false },
    { id: 5, title: 'Tarefa 05', completed: false },
    { id: 6, title: 'Tarefa 06', completed: true },
    { id: 7, title: 'Tarefa 07', completed: false },
    { id: 8, title: 'Tarefa 08', completed: true },
    { id: 9, title: 'Tarefa 09', completed: true },
    { id: 10, title: 'Tarefa 10', completed: false }
  ])

  const handleAddTask = () => {
    if (taskTitle.trim() === '') {
      return
    }

    const newTask = { id: tasks.length + 1, title: taskTitle, completed: false }
    setTasks([newTask, ...tasks])
    setTaskTitle('')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.addTaskContainer}>
        <TextInput
          placeholder="Nova tarefa..."
          style={styles.addTaskInput}
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <ImageButton
          title="Adicionar tarefa"
          justifyContent="center"
          image={require('../../assets/images/add.svg')}
          onPress={handleAddTask}
        />
      </View>
      <FlatList
        data={tasks}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        keyExtractor={(task) => task.id}
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
