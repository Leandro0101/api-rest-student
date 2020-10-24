import { Router } from 'express'
import imageController from '../controllers/ImageController'

const router = new Router()

router.post('/', imageController.store)

export default router
