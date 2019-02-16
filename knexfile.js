// Update with your config settings.
const { snakeCase } = require("lodash");

module.exports = {
  local: {
    client: "mysql",
    wrapIdentifier: (value, origImpl, queryContext) => origImpl(snakeCase(value)),
    connection: {
      host: "localhost",
      user: "test",
      password: "secret",
      database: "test-db"
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
