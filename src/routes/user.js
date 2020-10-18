import { Router } from 'express'
import userController from '../controllers/userController'
import auth from '../middlewares/auth'
const router = new Router()

router.post('/', userController.store)
router.put('/', auth, userController.update)

export default router
