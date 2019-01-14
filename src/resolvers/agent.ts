import { Agent } from "./../types/index";
import { findAgent, saveAgent } from "../models/agent";
const agentResolver = {
  Query: {
    agent(_: any, args: { id: string }) {
      return findAgent(args.id);
    }
  },
  Mutation: {
    saveAgent: (_: any, args: { agent: Agent }) => {
      const { agent } = args;
      return saveAgent(agent);
    }
  }
};

export default agentResolver;
