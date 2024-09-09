import { Express } from 'express'
import { createServer } from 'http'
import socketConfig from './socket'

const initServer = async (app: Express) => {
  const port = process.env.PORT
  const server = await createServer(app)

  await socketConfig(server)

  server.listen(port, () => {
    console.log(`Server listeningd on port ${port}`)
  })
}

export default initServer
