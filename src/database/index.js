import Sequelize from 'sequelize'
import dbConfig from '../config/database'
import User from './../models/User'
import Student from '../models/Student'
import Image from '../models/Image'

const models = [User, Student, Image]

const connection = new Sequelize(dbConfig)

models.map(model => model.init(connection))
models.map(model => model.associate && model.associate(connection.models))

export default connection
