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

  return { getUsers, getPostsByUser }
}

export default useServer
