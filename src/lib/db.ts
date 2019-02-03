import knex from "knex";
import { snakeCase, camelCase } from "lodash";

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
      return result.map(camelCase);
    } else {
      return camelCase(result);
    }
  }
});

export default db;
