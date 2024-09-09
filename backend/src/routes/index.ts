import { Router, Express } from 'express'
import UserRoutes from './user'

const expressRoutes = (app: Express) => {
  const routes = Router()
  const userRoutes = UserRoutes()

  app.use(routes, userRoutes)
}

export default expressRoutes
