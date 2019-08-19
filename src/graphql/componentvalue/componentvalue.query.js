import { resolver } from 'graphql-sequelize'
import { Componentvalue } from '../../models'
import { Sequelize } from 'sequelize'
import constructWhere from '../tools/process-arguments'

const Op = Sequelize.Op

const conditionsMap = {
  bestlocMoreThan: {
    symbol: Op.gt,
    target: "bestloc",
    inputType: 'number'
  },
  bestlocLessThan: {
    symbol: Op.lt,
    target: "bestloc",
    inputType: 'number'
  }
}

export const Query = {
  componentvalue: resolver(Componentvalue, {
    before: async (findOptions, args, context, info) => {
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
