import Student from '../models/Student'

class StudentController {
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
