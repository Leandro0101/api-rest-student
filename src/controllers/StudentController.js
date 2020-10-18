class StudentController {
  async index (req, res) {
    return res.json('ok')
  }
}

export default new StudentController()
