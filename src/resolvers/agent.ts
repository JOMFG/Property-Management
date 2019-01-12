import { Agent } from './../types/index';
import { findAgent, saveAgent } from "../models/agent";
import { IResolvers } from 'graphql-tools';

const agentResolver: IResolvers = {
  Query: {
    getAgent: (_: any, args: any) => {
      return findAgent(args.id as string);
    }
  },
  Mutation: {
    saveAgent: (_: any, args: any) => {
      const { agent } = args;
      return saveAgent(agent as Agent);
    }
  },
};

export default agentResolver;
