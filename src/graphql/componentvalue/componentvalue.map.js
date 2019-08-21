import { resolver } from 'graphql-sequelize'
import { Componentvalue } from '../../models'

export const ComponentvalueMap = {
  food: resolver(Componentvalue.associations.Food),
  foodbase: resolver(Componentvalue.associations.Foodbase),
  component: resolver(Componentvalue.associations.Component)
}
