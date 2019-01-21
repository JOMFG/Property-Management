import { gql, makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import resolvers from "../resolvers/property";
import common from "./common";

const property: GraphQLSchema = makeExecutableSchema({
  typeDefs: [
    common,
    gql`
      type Query {
        property(id: ID!): Property
        properties(property: InputPropertySearch!): [Property!]!
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
        propertyType: PropertyType
      }

      input InputPropertySearch {
        id: ID
        city: String
        address: String
        agentId: String
        price: FloatFilter
        propertyType: PropertyType
      }

      input InputProperty {
        price: Float!
        city: String!
        address: String!
        agentId: String!
        description: String!
        propertyType: PropertyType!
      }

      type Property {
        id: ID!
        price: Float!
        city: String!
        address: String!
        agentId: String!
        description: String!
        propertyType: PropertyType!
      }

      enum PropertyType {
        CONDO
        HOUSE
        APPT
      }
    `
  ],
  resolvers
});

export default property;
