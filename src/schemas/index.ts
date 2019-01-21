import property from "./property";
import agent from "./agent";
import linked from "./linked";
import { addMockFunctionsToSchema } from "apollo-server-express";

const schemas = [ property, agent,  linked];

[property, agent].forEach((schema) => addMockFunctionsToSchema({ schema }));

export default schemas;