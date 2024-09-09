import { Server } from 'socket.io'

const socketConfig = (server: any) => {
  const webSocket = new Server(server, {
    path: '/chat',
  })

  webSocket.on('connection', (socket) => {
    console.log('Um usuário se conectou!')
  })
}

export default socketConfig
