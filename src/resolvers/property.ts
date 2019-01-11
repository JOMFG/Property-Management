import { Property } from "./../types";
import { findProperty, saveProperty, removeProperty, updateProperty } from "../models/property";

const propertyResolver = {
  Query: {
    getProperty: (_: any, args: any) => {
      return findProperty(args.id as string);
    }
  },
  Mutation: {
    saveProperty: (_: any, args: any) => {
      const { property } = args;
      return saveProperty(property as Property);
    },
    deleteProperty: (_: any, args: any) => {
      return removeProperty(args.id as string);
    },
    updateProperty: (_: any, args: any) => {
      const { property } = args;
      return updateProperty(property as Partial<Property>)
    }
  }
};

export default propertyResolver;
