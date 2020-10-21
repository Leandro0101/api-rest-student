import Sequelize from 'sequelize'
import dbConfig from '../config/database'
import User from './../models/User'
import Student from '../models/Student'

const models = [User, Student]

const connection = new Sequelize(dbConfig)

models.map(model => model.init(connection))

export default connection
