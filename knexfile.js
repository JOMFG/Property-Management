// Update with your config settings.

module.exports = {
  local: {
    client: "mysql",
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
