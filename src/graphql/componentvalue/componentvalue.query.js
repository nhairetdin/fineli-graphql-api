import { resolver } from 'graphql-sequelize'
import { Componentvalue } from '../../models'
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op
// Create more general solution later
const conditionsMap = {
  bestlocMoreThan: Op.gt,
  bestlocLessThan: Op.lt
}

export const Query = {
  componentvalue: resolver(Componentvalue, {
    before: async (findOptions, args, context, info) => {
      // Extra fields / condition-parameters from the query 
      // that are not attributes from the schema (bestlocLessThan, bestlocMoreThan...)
      const conditions = createConditions(findOptions, args)
      // Conditions separated from the "native" attributes that can be sent to sequelize
      const where = cleanFindOptions(findOptions.where, conditions)

      // Transform the extra conditions and add into where-object
      // so that they can be sent to sequelize
      Object.keys(conditions).forEach(condition => {
        where.bestloc = {
          ...where.bestloc,
          [conditionsMap[condition]]: conditions[condition]
        }
      })

      findOptions.where = where
      return findOptions
    },
    after: async result => {
      return result
    }
  })
}

const createConditions = (findOptions, args) => {
  const conditions = {}
  Object.keys(args.where).forEach(key => {
    if (!findOptions.attributes.includes(key)) {
      conditions[key] = args.where[key]
    }
  })
  return conditions
}

const cleanFindOptions = (where, conditions) => {
  Object.keys(conditions).forEach(condition => {
    if (where[condition]) {
      delete where[condition]
    }
  })
  return where
}
