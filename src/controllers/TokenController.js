import User from '../models/User'
import jwt from 'jsonwebtoken'
class TokenController {
  async store (req, res) {
    const { email, password } = req.body

    if (!email || !password) return res.status(404).json({ error: 'Email or password incorrets' })

    const user = await User.findOne({ where: { email } })

    if (!user) return res.status(404).json({ error: 'Email or password incorrets' })
    if (!await user.checkPassword(password)) return res.status(404).json({ error: 'Email or password incorrets' })

    const { id } = user
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION
    })

    return res.status(200).json({ token })
  }
}

export default new TokenController()
