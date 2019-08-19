const createConditions = (findOptions, args) => {
  let conditions = {}
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

const constructWhere = (findOptions, args, conditionsMap) => {
  const conditions = createConditions(findOptions, args)
  const where = cleanFindOptions(findOptions.where, conditions)

  Object.keys(conditions).forEach(condition => {
    const target = conditionsMap[condition].target

    if (conditionsMap[condition].inputType === 'number') {
      where[target] = {
        ...where[target],
        [conditionsMap[condition].symbol]: conditions[condition]
      }
    } else if (conditionsMap[condition].inputType === 'string') {
      where[target] = {
        ...where[target],
        [conditionsMap[condition].symbol]: `%${conditions[condition]}%`
      }
    }
  })
  return where
}

export default constructWhere
