import { Express } from 'express'

const initServer = (app: Express) => {
  const port = process.env.PORT

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

export default initServer
