import { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import ImageButton from '../components/ImageButton'
import Task from '../components/Task'
import useServer from '../hooks/useServer'

const TaskScreen = (props) => {
  const { userId } = props.route.params

  const { getTasksByUser, createTask, updateTask } = useServer()

  const [taskTitle, setTaskTitle] = useState('')
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const tasks = await getTasksByUser(userId)
    setTasks(tasks)
  }

  const handleAddTask = async () => {
    if (taskTitle.trim() === '') {
      return
    }

    const newTask = { title: taskTitle, completed: false, userId: userId }

    await createTask(newTask)
    await fetchTasks()

    setTaskTitle('')
  }

  const handleTaskToggled = async (task) => {
    await updateTask(task)
    await fetchTasks()
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.addTaskContainer}>
        <TextInput
          placeholder="Título da tarefa..."
          placeholderTextColor="#ccc"
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
          return <Task task={task} onTaskToggled={handleTaskToggled} />
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
