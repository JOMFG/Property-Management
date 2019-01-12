import { Property } from "./../types";
import {
  findProperty,
  saveProperty,
  removeProperty,
  updateProperty
} from "../models/property";
import { IResolvers } from "graphql-tools";

interface WithID {
  id: string;
}

interface WithProperty {
  property: Property;
}

interface WithPartialProperty {
  property: Partial<Property>;
}

const propertyResolver: IResolvers<Property> = {
  Query: {
    getProperty: (context, args) => {
      return findProperty(args);
    },

    getPropertyByAgentId: (context, args) => {
      return findProperty(args);
    },
  },
  Mutation: {
    saveProperty: (context, args: WithProperty) => {
      const { property } = args;
      return saveProperty(property);
    },

    deleteProperty: (context, args: WithID) => {
      return removeProperty(args.id);
    },

    updateProperty: (context, args: WithPartialProperty) => {
      const { property } = args;
      return updateProperty(property);
    }
  },
};

export default propertyResolver;
