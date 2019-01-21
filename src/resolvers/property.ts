import { Property, InputPropertySearch } from "./../types";
import {
  findProperty,
  saveProperty,
  removeProperty,
  updateProperty
} from "../models/property";
import { IResolvers } from "graphql-tools";

const propertyResolver: IResolvers = {
  Query: {
    property: (_, args: { id: string }) => {
      return findProperty(args).then(([result]) => result);
    },

    properties: (_, args: { property: InputPropertySearch }) => {
      return findProperty(args.property);
    }
  },
  Mutation: {
    saveProperty: (context, args: { property: Property }) => {
      const { property } = args;
      return saveProperty(property);
    },

    deleteProperty: (context, args: { id: string }) => {
      return removeProperty(args.id);
    },

    updateProperty: (context, args: { property: Partial<Property> }) => {
      const { property } = args;
      return updateProperty(property);
    }
  }
};

export default propertyResolver;
