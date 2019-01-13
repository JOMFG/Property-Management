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

const propertyResolver: IResolvers = {
  Query: {
    getPropertyById: (_, args: WithID) => {
      return findProperty(args).then(([result]) => result);
    },

    getProperties: (_, args: WithPartialProperty) => {
      return findProperty(args.property);
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
  }
};

export default propertyResolver;
