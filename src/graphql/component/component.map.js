import { resolver } from 'graphql-sequelize'
import { Component } from '../../models'

export const ComponentMap = {
  componentvalues: resolver(Component.associations.Componentvalues)
}