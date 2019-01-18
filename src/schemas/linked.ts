import { gql } from "apollo-server-express";

const linkedTypedDefs = gql`
  extend type Agent {
    properties: [Property]
  }

  extend type Property {
    agent: Agent
  }
`;


export default linkedTypedDefs;
