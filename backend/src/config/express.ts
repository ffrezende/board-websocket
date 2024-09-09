import express from 'express'
import dotenv from 'dotenv'

const expressConfig = () => {
  dotenv.config()

  const app = express()

  return app
}

export default expressConfig
