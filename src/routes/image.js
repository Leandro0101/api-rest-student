import { Router } from 'express'
import auth from '../middlewares/auth'
import imageController from '../controllers/ImageController'

const router = new Router()

router.post('/', auth, imageController.store)

export default router
