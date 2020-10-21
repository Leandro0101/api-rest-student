import { Model, DataTypes } from 'sequelize'

export default class Student extends Model {
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
      registration_number: {
        type: DataTypes.INTEGER,
        unique: {
          msg: 'Registration number already exists'
        }
      },
      age: DataTypes.INTEGER

    }, { sequelize })

    return this
  }
}
