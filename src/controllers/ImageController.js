import multer from 'multer'
import multerConfig from '../config/multer'
import Image from '../models/Image'
const upload = multer(multerConfig).single('image')

class ImageController {
  store (req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code]
        })
      }
      const { student_id } = req.body

      const { originalname, filename } = req.file
      const image = await Image.create({ originalname, filename, student_id })

      return res.json(image)
    })
  }
}

export default new ImageController()
