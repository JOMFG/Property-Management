import { findProperty } from "../models/property";

const property = {
  Query: {
    getProperty: (root: any, args: any) => {
      return findProperty(args.id);
    }
  }
};

export default property;
