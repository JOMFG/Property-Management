import { gql, makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";

const agent: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
    type Query {
      getAgent(id: ID): Agent
    }

    type Mutation {
      saveAgent(agent: InputAgent): Agent
      updateAgent(agent: InputAgentPartial): Agent
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
  `
});

export default agent;
