import knex from "knex";
import { snakeCase, camelCase, mapKeys } from "lodash";

const camelCaseKey = (_: string, key: string) => camelCase(key);

const db = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "test",
    password: "secret",
    database: "test-db"
  },
  debug: true,
  wrapIdentifier: (value, origImpl, queryContext) => origImpl(snakeCase(value)),
  postProcessResponse: (result, queryContext) => {
    if (Array.isArray(result)) {
      return result.map(data => mapKeys(data, camelCaseKey));
    } else {
      return mapKeys(result, camelCaseKey);
    }
  }
});

export default db;
