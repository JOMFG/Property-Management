import { Agent, InputAgentSearch } from "./../types/index";
import { findAgent, saveAgent } from "../models/agent";
const agentResolver = {
  Query: {
    agent(_: any, args: { id: string }) {
      return findAgent(args).then(([result]) => result);
    },
    agents(_: any, args: { agent: InputAgentSearch }) {
      return findAgent(args.agent);
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
