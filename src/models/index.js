import Sequelize from 'sequelize'
import { ENV } from '../config/env.config'
const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

export const sequelize = new Sequelize({
  host: ENV.DB_HOST,
  database: ENV.DB_NAME,
  port: +ENV.DB_PORT,
  dialect: ENV.DB_DIALECT,
  username: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  operatorsAliases: false,
  logging: false,
  storage: ':memory:'
})

const models = {}

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  })
  .forEach(file => {
    const filename = file.slice(0, -3)
    let modelname = capitalize(filename.split('.')[0])
    const model = require(`./${filename}`)[modelname]
    models[modelname] = model
  })

Object.keys(models).forEach(modelName => {
  models[modelName].init(sequelize, Sequelize)
})

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate()
  }
})

Object.keys(models).forEach(model => {
  module.exports[model] = models[model]
})