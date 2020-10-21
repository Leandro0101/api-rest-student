import { Router } from 'express'
import multer from 'multer'
import imageController from '../controllers/ImageController'
import multerConfig from '../config/multer'

const upload = multer(multerConfig)

const router = new Router()

router.post('/', upload.single('image'), imageController.store)

export default router
