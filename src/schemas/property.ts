import { gql, makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";

const property: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
    type Query {
      getProperty(id: ID): Property
    }

    type Mutation {
      saveProperty(property: InputProperty): Property
      updateProperty(property: InputPropertyPartial): Property
    }

    input InputPropertyPartial { 
      id: ID!
      price: Float
      city: String
      address: String
      description: String
    }

    input InputProperty { 
      price: Float!
      city: String!
      address: String!
      description: String!
    }

    type Property { 
      id: ID!
      price: Float!
      city: String!
      address: String!
      description: String!
    }
  `
});

export default property;
