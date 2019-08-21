import { resolver } from 'graphql-sequelize'
import { Foodbase } from '../../models'

export const FoodbaseMap = {
  componentvalues: resolver(Foodbase.associations.Componentvalues),
  food: resolver(Foodbase.associations.Food)
}