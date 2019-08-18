import { resolver } from 'graphql-sequelize'
import { Componentvalue } from '../../models'

export const Query = {
  componentvalue: resolver(Componentvalue, {
    before: async (findOptions, args, context, info) => {
      return findOptions
    },
    after: async (result) => {
      return result
    }
  })
}