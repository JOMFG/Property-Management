import knex from "knex";

const db = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "test",
    password: "secret",
    database: "test-db"
  },
  debug: true,
});

export default db;
