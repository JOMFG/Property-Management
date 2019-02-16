import { gql } from "apollo-server-core";

export default gql`
  input FloatFilter {
    eq: Float
    le: Float
    lt: Float
    ge: Float
    gt: Float
  }
`;