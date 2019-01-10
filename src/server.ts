import app from "./app";
import { ApolloServer, gql } from "apollo-server-express";


const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};



const apolloServer = new ApolloServer({ typeDefs, resolvers });
const server = app.listen(8000, () => console.log('Server started in localhost:8000'))


apolloServer.applyMiddleware({ app, path:"/graphql" });

export default server;