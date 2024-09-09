import { Request, Response } from 'express'

class UserController {
  getUser = async (req: Request, res: Response) => {
    return res.status(200).json({ name: 'test' })
  }
}

export default UserController
