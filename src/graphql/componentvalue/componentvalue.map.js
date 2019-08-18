import { resolver } from 'graphql-sequelize'
import { Componentvalue } from '../../models'

export const ComponentvalueMap = {
  food: resolver(Componentvalue.associations.Food)
}
