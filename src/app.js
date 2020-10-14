import dotenv from 'dotenv'
import express from 'express'
import homeRoutes from './routes/home'
import useRoutes from './routes/user'
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
    this.app.use(useRoutes)
  }
}

export default new App().app
