# GraphQL API for Fineli data (mysql-database)
Using dataloader-sequelize and graphql-sequelize to solve n+1 problem
## Models added:
### Food (table: elintarvike)

Queries:

`food(where: FoodWhere, limit: Int): [Food]`

### Componentvalue (table: ravintoarvo)

Queries:

`componentvalue(where: ComponentvalueWhere, limit: Int): [Componentvalue]`
