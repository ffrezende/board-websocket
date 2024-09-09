import { Express } from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import socketConfig from './socket'

const initServer = (app: Express) => {
  const port = process.env.PORT
  const server = createServer(app)

  socketConfig(server)

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

export default initServer
