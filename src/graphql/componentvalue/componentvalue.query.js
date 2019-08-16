import { resolver } from 'graphql-sequelize'
import { Componentvalue } from '../../models'

export const Query = {
  getComponentvalue: resolver(Componentvalue),
  getComponentvalueById: resolver(Componentvalue)
}