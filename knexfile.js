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
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
