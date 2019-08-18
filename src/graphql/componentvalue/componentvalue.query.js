import { resolver } from 'graphql-sequelize'
import { Componentvalue } from '../../models'
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op
// Refactor this later
export const Query = {
  componentvalue: resolver(Componentvalue, {
    before: async (findOptions, args, context, info) => {
      const conditions = createConditions(findOptions, args)
      const findOptionsCleaned = cleanFindOptions(findOptions, conditions)

      if (conditions.bestlocMoreThan) {
        findOptionsCleaned.where.bestloc = {
          [Op.gt]: conditions.bestlocMoreThan
        }
      }

      if (conditions.bestlocLessThan) {
        findOptionsCleaned.where.bestloc = {
          ...findOptionsCleaned.where.bestloc,
          [Op.lt]: conditions.bestlocLessThan
        }
      }

      return findOptionsCleaned
    },
    after: async (result) => {
      return result
    }
  })
}

const createConditions = (findOptions, args) => {
  const conditions = {}
  Object.keys(args.where)
  .forEach(key => {
    if (!findOptions.attributes.includes(key)) {
      conditions[key] = args.where[key]
    }
  })
  return conditions
}

const cleanFindOptions = (findOptions, conditions) => {
  Object.keys(conditions)
    .forEach(condition => {
      if (findOptions.where[condition]) {
        delete findOptions.where[condition]
      }
    })
  return findOptions
}