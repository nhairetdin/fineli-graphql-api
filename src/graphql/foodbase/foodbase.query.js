import { resolver } from 'graphql-sequelize'
import { Foodbase } from '../../models'
import { Sequelize } from 'sequelize'
import constructWhere from '../tools/process-arguments'

const Op = Sequelize.Op

const conditionsMap = {
  foodnameContains: {
    symbol: Op.like,
    target: "foodname",
    inputType: 'string'
  }
}
export const Query = {
  foodbase: resolver(Foodbase, {
    before: async (findOptions, args) => {
      if (findOptions.where) {
        findOptions.where = constructWhere(findOptions, args, conditionsMap)
      }
      return findOptions
    },
    after: async result => {
      return result
    }
  })
}
