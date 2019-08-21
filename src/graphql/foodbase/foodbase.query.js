import { resolver } from 'graphql-sequelize'
import { Foodbase } from '../../models'
// import { Sequelize } from 'sequelize'

export const Query = {
  foodbase: resolver(Foodbase)
}
