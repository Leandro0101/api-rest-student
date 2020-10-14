import { Router } from 'express'
import userController from '../controllers/userController'
const router = new Router()

router.post('/users', userController.store)

export default router
