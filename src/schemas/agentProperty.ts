import { gql, addMockFunctionsToSchema } from "apollo-server-express";

const agentProperty = gql`
  extend type Agent {
    properties: [Property]
  }

  extend type Property {
    agent: Agent
  }
`;


export default agentProperty;
