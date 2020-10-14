import User from '../models/User'

class UserController {
  async store (req, res) {
    const user = await User.create(req.body)

    res.status(201).json(user)
  }
}

export default new UserController()
