import expressConfig from './src/config/express'
import initServer from './src/config/server'
import expressRoutes from './src/routes'

const startServer = async () => {
  const app = await expressConfig()

  expressRoutes(app)

  initServer(app)
}

startServer()
