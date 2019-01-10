import { gql, makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";

const property: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
    type Query {
      getProperty(id: ID): Property
    }

    type Property { 
        id: ID
        price: Float
        city: String
        address: String
        description: String
    }
  `
});

export default property;
