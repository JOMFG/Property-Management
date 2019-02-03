import { Agent, InputAgentSearch } from "./../types/index";
import db from "../lib/db";
import uuid from "uuid/v4";

type AGENT_COL_LIST = Exclude<keyof Agent, "properties">;

const AGENT_TABLE = "agent";
const AGENT_COL_NAMES: { [P in AGENT_COL_LIST]: string } = {
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
    .into(AGENT_TABLE)
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

export function findAgent(agentQuery: InputAgentSearch) {
  const queryBuilder = db.select().from(AGENT_TABLE);

  if (agentQuery.id) {
    queryBuilder.where(AGENT_COL_NAMES.id, agentQuery.id);
  }

  if (agentQuery.email) {
    queryBuilder.andWhere(AGENT_COL_NAMES.email, agentQuery.email);
  }

  if (agentQuery.address) {
    queryBuilder.andWhere(AGENT_COL_NAMES.address, agentQuery.address);
  }

  return queryBuilder.then(f => f);
}
