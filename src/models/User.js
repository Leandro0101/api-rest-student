import { Model, DataTypes } from 'sequelize'
import bcrypt from 'bcryptjs'

export default class User extends Model {
  static init (sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'Name must be a min of 3 characters and a max of 50'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already exists'
        },
        validate: {
          isEmail: {
            msg: 'Invalid email'
          }
        }
      },
      password_hash: {
        type: DataTypes.STRING,
        defaultValue: ''
      },
      password: {
        type: DataTypes.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'password must be a min of 6 characters and a max of 50'
          }
        }
      }
    }, { sequelize })

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8)
      }
    })

    return this
  }

  checkPassword (password) {
    return bcrypt.compare(password, this.password_hash)
  }
}
