import { gql, makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import resolvers from "../resolvers/property";

const property: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
    type Query {
      getProperty(id: ID!): Property
      getProperties(agentId: ID!): [Property]
    }

    type Mutation {
      deleteProperty(id: ID!): Boolean
      saveProperty(property: InputProperty): Property
      updateProperty(property: InputPropertyPartial): Boolean
    }

    input InputPropertyPartial {
      id: ID!
      price: Float
      city: String
      address: String
      agentId: String
      description: String
    }

    input InputProperty {
      price: Float!
      city: String!
      address: String!
      agentId: String!
      description: String!
    }

    type Property {
      id: ID!
      price: Float!
      city: String!
      address: String!
      agentId: String!
      description: String!
    }
  `,
  resolvers,
});

export default property;
