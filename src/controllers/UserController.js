import User from '../models/User'

class UserController {
  async store (req, res) {
    try {
      const user = await User.create(req.body)
      const { id, name, email } = user
      return res.status(201).json({ id, name, email })
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) })
    }
  }

  async update (req, res) {
    const user = await User.findByPk(req.user.id)

    if (!user) return res.status(404).json({ error: 'User not found' })

    try {
      const updatedUser = await user.update(req.body)
      const { email, name } = updatedUser
      return res.status(200).json({ name, email })
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(err => err.message) })
    }
  }
}

export default new UserController()
