import Sequelize, { Model } from 'sequelize'

export default class Student extends Model {
  static init (Sequelize) {
    super.init({
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER
    }, { Sequelize })

    return this
  }
}
