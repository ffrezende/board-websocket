import { io } from 'socket.io-client'

const BASE_URL = 'http://127.0.0.1:3000/'

const socketConfig = () => {
  const socket = io(BASE_URL, { path: '/chat' })

  return socket
}

export default socketConfig
