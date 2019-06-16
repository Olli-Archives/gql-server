
// const {buildSchema} = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQlNonNull
} = require('graphql');


const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: ()=>({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
})

const CustomersType = new GraphQLObjectType({
  name: 'Customers',
  fields: ()=>({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    customer:{
      type: CustomerType,
      args:{
        id: {type:GraphQLString},
      },
      resolve(_, args){
       return customers.filter(customer => customer.id === args.id)[0]
      }
    },
    customers:{
      type: new GraphQLList(CustomerType),
      resolve(){
        return customers
      }
    }
  }
})

module.exports = new GraphQLSchema({ 
 query: RootQuery
})


//hardcoded data

customers = [
  {
  id:'1',
  name:'test name',
  email:'jdoe@gmail.com',
  age:35
},
{
  id:'2',
  name:'test name2',
  email:'test1@gmail.com',
  age:31
},
{
  id:'3',
  name:'test name3',
  email:'test3@gmail.com',
  age:37
}];