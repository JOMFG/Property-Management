import { Agent, Property } from "../types";
import propertySchema from "../schemas/property";
import agentSchema from "../schemas/agent";
import { IResolvers } from "graphql-tools";

const stitches: IResolvers = {
  Agent: {
    properties: {
      fragment: `... on Agent { id }`,
      resolve(agent: Agent, args: any, context: any, info: any) {
        return info.mergeInfo.delegateToSchema({
          schema: propertySchema,
          operation: "query",
          fieldName: "property",
          args: {
            agentId: agent.id
          },
          context,
          info
        });
      }
    }
  },

  Property: {
    agent: {
      fragment: `... on Property { agentId }`,
      resolve(property: Property, args: any, context: any, info: any) {
        return info.mergeInfo.delegateToSchema({
          schema: agentSchema,
          operation: "query",
          fieldName: "agent",
          args: {
            id: property.agentId
          },
          context,
          info
        });
      }
    }
  }
};

export default stitches;
