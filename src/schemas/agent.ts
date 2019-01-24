import { gql, makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
import resolvers from "../resolvers/agent";

const agent: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
    type Query {
      agent(id: ID!): Agent
      agents(agent: InputAgentSearch!): [Agent!]!
    }

    type Mutation {
      saveAgent(agent: InputAgent!): Agent
      updateAgent(agent: InputAgentPartial!): Agent
    }

    input InputAgentSearch {
      id: ID
      email: String
      address: String
    }

    input InputAgentPartial {
      id: ID!
      email: String
      address: String
    }

    input InputAgent {
      email: String!
      address: String!
    }

    type Agent {
      id: ID!
      email: String!
      address: String!
    }
  `,
  resolvers
});

export default agent;
