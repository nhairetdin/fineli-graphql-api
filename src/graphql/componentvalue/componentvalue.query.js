import { resolver } from 'graphql-sequelize'
import { Componentvalue } from '../../models'
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op
// Refactor this later
export const Query = {
  componentvalue: resolver(Componentvalue, {
    before: async (findOptions, args, context, info) => {
      const conditions = createConditions(findOptions, args)
      const where = cleanFindOptions(findOptions.where, conditions)

      if (conditions.bestlocMoreThan) {
        where.bestloc = {
          [Op.gt]: conditions.bestlocMoreThan
        }
      }

      if (conditions.bestlocLessThan) {
        where.bestloc = {
          ...where.bestloc,
          [Op.lt]: conditions.bestlocLessThan
        }
      }
      findOptions.where = where
      return findOptions
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

const cleanFindOptions = (where, conditions) => {
  Object.keys(conditions)
    .forEach(condition => {
      if (where[condition]) {
        delete where[condition]
      }
    })
  return where
}