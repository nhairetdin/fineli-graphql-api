## Get all foods (foodid, foodname), limit number of results to 10:

    query allFoods {
      getAllFoods(limit: 10) {
        foodid
        foodname
      }
    }

## Get food by id:
    
    query foodById {
      getFoodById(
        where: {
          foodid: 7
        }
      ) {
        foodid
        foodname
      }
    }
