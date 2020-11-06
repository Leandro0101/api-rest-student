import { Model, DataTypes } from 'sequelize'

export default class Image extends Model {
  static init (sequelize) {
    super.init({
      originalname: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'field cannot be empty'
          }
        }
      },
      filename: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'field cannot be empty'
          }
        }
      }
    }, { sequelize, tableName: 'images' })

    return this
  }

  static associate (models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'students' })
  }
}
