import { Server } from 'socket.io'

const createNewSocketServer = (server: any) => {
  const webSocket = new Server(server, {
    cors: {
      origin: '*',
    },
    path: '/chat',
  })

  return webSocket
}
const socketConfig = async (server: any) => {
  const webSocket = createNewSocketServer(server)

  webSocket.on('connection', (socket) => {
    console.log('Um usuário se conectou!')

    let room: string

    socket.on('join-room', (roomName) => {
      socket.join(roomName) // User joins the room
      room = roomName
      console.log(`User ${socket.id} joined room ${roomName}`)
    })

    // Handle chat messages or other events within the room
    socket.on('chat-message', (message) => {
      console.log(
        `User ${socket.id} sent the message: ${message} in ${room} room`
      )
      socket.to(room).emit('message', message) // Broadcast to room
    })

    socket.on('disconnect', () => {
      console.log(`User ${socket.id} disconnected`)
    })
  })
}

export default socketConfig
