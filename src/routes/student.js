import { Router } from 'express'
import studentController from '../controllers/StudentController'
const router = new Router()

router.post('/', studentController.store)

export default router
