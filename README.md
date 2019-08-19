# GraphQL API for Fineli data (mysql-database)
Using dataloader-sequelize and graphql-sequelize to solve n+1 problem
## Models added:
### Food (table: elintarvike)

Queries:

`food(where: FoodWhere, limit: Int): [Food]`

    input FoodWhere {
      foodid: Int
      foodnameContains: String
    }

### Componentvalue (table: ravintoarvo)

Queries:

`componentvalue(where: ComponentvalueWhere, limit: Int): [Componentvalue]`

    input ComponentvalueWhere {
      id: Int
      foodid: Int
      eufdname: String
      bestlocMoreThan: Float
      bestlocLessThan: Float
    }

### Component (table: ravintotekija)

Queries:

`component(where: ComponentWhere): [Component]`

    input ComponentWhere {
      eufdname: String
      compunit: String
      cmpclass: String
      cmpclassp: String
    }
    