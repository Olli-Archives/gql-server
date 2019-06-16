const schema = require('./schemas/schema'); 
const express = require('express');
const express_graphql =  require ('express-graphql');


const app = express();
app.use('/graphql', express_graphql({
  schema: schema,
  graphiql: true
}))
 


app.listen(8080, ()=> console.log('Express GQL running'));