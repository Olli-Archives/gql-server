const express = require('express');
const express_graphql =  require ('express-graphql');
const {buildSchema} = require('graphql');

 const schema = buildSchema(`
  type Query {
    message: String!
  }
 `);

const root = {
  message: ()=>'hello'

};

const app = express();
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8080, ()=> console.log('Express GQL running'));