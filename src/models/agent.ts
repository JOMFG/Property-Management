import { Agent, InputAgentSearch, AgentDBFields } from "./../types/index";
import db from "../config/db";
import uuid from "uuid/v4";
import { conditionBuilder } from "../utils/db";

export function saveAgent(agentPartial: Agent) {
  const agent = {
    ...agentPartial,
    id: uuid()
  };

  return new Promise((resolve, reject) => {
    db.query("insert into agent set ?", agent, (error, _results, _fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(agent);
      }
    });
  });
}

export function updateAgent(agent: Partial<Agent>) {
  const { id, ...agentUpdate } = agent;

  return new Promise((resolve, reject) => {
    db.query(
      `update agent set ? where id = ?`,
      [agentUpdate, id],
      (error, _results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(agent);
        }
      }
    );
  });
}

export function removeAgent(id: string) {
  return new Promise((resolve, reject) => {
    db.query(
      `delete from agent where id = ?`,
      id,
      (error, _results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
}

export function findAgent(agent: Partial<InputAgentSearch>) {
  return new Promise((resolve, reject) => {
    const [query, values] = buildQuery(agent);
    db.query(
      "select * from agent where " + query,
      values,
      (error, results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
}


function buildQuery(agentPartial: Partial<InputAgentSearch>) { 
  let values: Array<string | number> = [];
  let query: Array<string> = [];


  if (agentPartial.id) {
    query = query.concat(conditionBuilder.eq(AgentDBFields.id));
    values = values.concat(agentPartial.id);
  }

  if (agentPartial.email) {
    query = query.concat(conditionBuilder.eq(AgentDBFields.email));
    values = values.concat(agentPartial.email);
  }

  if (agentPartial.address) {
    query = query.concat(conditionBuilder.eq(AgentDBFields.address));
    values = values.concat(agentPartial.address);
  }

  return [query.join(" and "), values];
}