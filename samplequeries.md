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

