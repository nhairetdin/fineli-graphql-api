import { resolver } from 'graphql-sequelize'
import { Food } from '../../models'

export const FoodMap = {
  componentvalues: resolver(Food.associations.Componentvalues)
}
