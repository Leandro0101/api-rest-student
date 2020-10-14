import Sequelize from 'sequelize'
import dbConfig from '../config/database'
import User from './../models/User'
const models = [User]

const connection = new Sequelize(dbConfig)

models.map(model => model.init(connection))

export default connection
