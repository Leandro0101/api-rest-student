import dotenv from 'dotenv'
import express from 'express'
import homeRoutes from './routes/home'
import userRoutes from './routes/user'
import authRoutes from './routes/auth'
import studentRoutes from './routes/student'
import imageRoutes from './routes/image'
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
    this.app.use('/users', userRoutes)
    this.app.use('/auth', authRoutes)
    this.app.use('/students', studentRoutes)
    this.app.use('/images', imageRoutes)
  }
}

export default new App().app
