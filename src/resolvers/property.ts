import { Property } from "./../types";
import { findProperty, saveProperty } from "../models/property";

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
    }
  }
};

export default propertyResolver;
