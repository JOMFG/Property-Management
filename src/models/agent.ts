import { Agent, InputAgentSearch } from "./../types/index";
import db from "../config/db";
import uuid from "uuid/v4";

type AGENT_COL_LIST = Exclude<keyof Agent, "properties">;

const TABLE = "agent";
const AGENT_TABLE: { [P in AGENT_COL_LIST]: string } = {
  id: "id",
  address: "address",
  email: "email"
};

export function saveAgent(agentPartial: Agent) {
  const agent = {
    ...agentPartial,
    id: uuid()
  };

  return db
    .insert(agent)
    .into(TABLE)
    .thenReturn(true);
}

export function updateAgent(agent: Partial<Agent>) {
  const { id, ...agentUpdate } = agent;

  return db
    .update(agentUpdate)
    .where({ id })
    .thenReturn(true);
}

export function removeAgent(id: string) {
  return db
    .delete()
    .where({ id })
    .thenReturn(true);
}

export function findAgent(agent: Partial<InputAgentSearch>) {
  const queryBuilder = db.select().from(TABLE);

  if (agent.id) {
    queryBuilder.where(AGENT_TABLE.id, agent.id);
  }

  if (agent.email) {
    queryBuilder.andWhere(AGENT_TABLE.email, agent.email);
  }

  if (agent.address) {
    queryBuilder.andWhere(AGENT_TABLE.address, agent.address);
  }

  return queryBuilder.then((result: Agent[]) => result);
}
