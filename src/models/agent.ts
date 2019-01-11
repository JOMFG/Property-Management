import { Agent } from './../types/index';
import db from "../config/db";
import uuid from "uuid/v4";

export function saveAgent(agentPartial: Agent) {
  const agent = {
    ...agentPartial,
    id: uuid()
  };

  return new Promise((resolve, reject) => {
    db.query(
      "insert into agent set ?",
      agent,
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

export function findAgent(id: string) {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from agent where ?",
      { id },
      (error, results, _fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      }
    );
  });
}
