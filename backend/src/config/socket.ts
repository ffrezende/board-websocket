import { Server } from 'socket.io'

const socketConfig = async (server: any) => {
  const webSocket = new Server(server, {
    cors: {
      origin: '*',
    },
    path: '/chat',
  })

  webSocket.on('connection', (socket) => {
    console.log('Um usuário se conectou!')
  })
}

export default socketConfig
