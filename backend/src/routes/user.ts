import { Router } from 'express'
import UserController from '../controller/userController'

const UserRoutes = () => {
  const routes = Router()
  const userController = new UserController()

  routes.get('/', userController.getUser)

  return routes
}
export default UserRoutes
