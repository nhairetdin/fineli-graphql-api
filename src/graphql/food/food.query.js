import { resolver } from 'graphql-sequelize'
import { Food } from '../../models'

export const Query = {
  getAllFoods: resolver(Food),
  getFoodById: resolver(Food)
}