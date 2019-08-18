import { resolver } from 'graphql-sequelize'
import { Food } from '../../models'

export const Query = {
  food: resolver(Food)
}