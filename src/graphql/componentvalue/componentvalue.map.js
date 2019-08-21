import { resolver } from 'graphql-sequelize'
import { Componentvalue } from '../../models'

export const ComponentvalueMap = {
  food: resolver(Componentvalue.associations.Food),
  component: resolver(Componentvalue.associations.Component),
  foodbase: resolver(Componentvalue.associations.Foodbase)
}
