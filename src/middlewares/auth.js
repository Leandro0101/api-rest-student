import jwt from 'jsonwebtoken'
import User from '../models/User'
import { promisify } from 'util'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).json({ error: 'No token provided' })

  const [, token] = authHeader.split(' ')
  try {
    const { id, email } = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET)

    const user = await User.findOne({ where: { id, email } })
    if (!user) return res.status(401).json({ error: 'token invalid' })

    req.user = { id, email }
    next()
  } catch (e) {
    return res.status(401).json({ error: 'token invalid' })
  }
}
