import { Router } from 'express'
import userController from '../controllers/userController'
import auth from '../middlewares/auth'
const router = new Router()

router.post('/users', userController.store)
router.put('/users', auth, userController.update)

export default router
