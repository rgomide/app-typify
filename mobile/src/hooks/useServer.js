import axios from 'axios'
const SERVER_PATH = 'http://localhost:3000'

const useServer = () => {
  const getUsers = async () => {
    const response = await axios.get(`${SERVER_PATH}/users`)
    return response.data
  }

  const getPostsByUser = async (userId) => {
    const response = await axios.get(`${SERVER_PATH}/users/${userId}/posts`)
    return response.data
  }

  const getTasksByUser = async (userId) => {
    const response = await axios.get(`${SERVER_PATH}/users/${userId}/tasks`)
    return response.data
  }

  const createTask = async (task) => {
    const response = await axios.post(`${SERVER_PATH}/tasks`, task)
    return response.data
  }

  const updateTask = async (task) => {
    const response = await axios.put(`${SERVER_PATH}/tasks/${task.id}`, task)
    return response.data
  }

  const getAlbumsByUser = async (userId) => {
    const response = await axios.get(`${SERVER_PATH}/users/${userId}/albums`)
    return response.data
  }

  return { getUsers, getPostsByUser, getTasksByUser, createTask, updateTask, getAlbumsByUser }
}

export default useServer
