## Get all foods (foodid, foodname), limit number of results to 10:

    query {
      food(limit: 10) {
        foodid
        foodname
      }
    }

## Get food by id:
    
    query {
      food(where: { foodid: 7 }) {
        foodid
        foodname
      }
    }

## Get foods and their components, limit to first 5

    query {
      food(limit: 5) {
        foodname
        componentvalues {
          eufdname
          bestloc
        }
      }
    }

## Get componentvalues with "PROT" between x - y and associated foods

    query b {
      componentvalue(
        limit: 100,
        where: {
          eufdname:"PROT",
          bestlocMoreThan: 50,
          bestlocLessThan: 60
        }
      ) {
        eufdname
        bestloc
        foodid
        food {
          foodname
        }
      }
    }

## Get all components that belong to vitamins (baseclass)

    query asd {
      component(where: { cmpclassp: "VITAM" }) {
        eufdname
        compunit
        cmpclass
        cmpclassp
      }
    }