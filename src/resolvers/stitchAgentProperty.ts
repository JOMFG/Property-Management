import { Agent, Property } from "../types";
import propertySchema from "../schemas/property";
import agentSchema from "../schemas/agent";
import { IResolverObject } from "graphql-tools";

const agentProperty: IResolverObject = {
  Agent: {
    properties: {
      fragment: `... on Agent { id }`,
      resolve(agent: Agent, args, context, info) {
        return info.mergeInfo.delegateToSchema({
          schema: propertySchema,
          operation: "query",
          fieldName: "getPropertyByAgentId",
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
      resolve(property: Property, args, context: any, info: any) {
        return info.mergeInfo.delegateToSchema({
          schema: agentSchema,
          operation: "query",
          fieldName: "getAgent",
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

export default agentProperty;