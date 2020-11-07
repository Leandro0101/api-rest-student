import Student from '../models/Student'
import Image from '../models/Image'
class StudentController {
  async index (req, res) {
    const students = await Student.findAll({
      attributes: ['name', 'registration_number', 'age'],
      order: [['id', 'desc'], [Image, 'id', 'desc']],
      include: {
        model: Image,
        attributes: ['url', 'filename']
      }
    })

    return res.status(200).json(students)
  }

  async store (req, res) {
    try {
      const student = await Student.create(req.body)
      const { registrationNumber, name } = student
      return res.status(201).json({ registrationNumber, name })
    } catch (e) {
      console.log(e)
      return res.status(400).json({ errors: e.errors.map(err => err.message) })
    }
  }
}

export default new StudentController()
