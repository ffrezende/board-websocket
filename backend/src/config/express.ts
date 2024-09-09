import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const expressConfig = async () => {
  dotenv.config()

  var corsOptions = {
    origin: process.env.CLIENT,
  }
  const app = express()

  app.use(cors(corsOptions))

  return app
}

export default expressConfig
