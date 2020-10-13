import dotenv from 'dotenv'
import express from 'express'
import homeRoutes from './routes/home'
import './database'
dotenv.config()

class App {
  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(express.json())
  }

  routes () {
    this.app.use(homeRoutes)
  }
}

export default new App().app
