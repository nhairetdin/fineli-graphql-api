# GraphQL API for Fineli data (mysql-database)
Using dataloader-sequelize and graphql-sequelize to solve n+1 problem
## Models added:
### Food (table: elintarvike)
Queries:

`getAllFoods(limit: Int)`

`getFoodById(where: FoodWhere {id: Int})`
