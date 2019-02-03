/**
 *
 * @param knex {import("knex")}
 */
exports.up = function(knex) {
  return knex.schema.createTable("agent", table => {
    table.string("id").primary();
    table.string("email").notNullable();
    table.string("address").notNullable();
  });
};

/**
 *
 * @param knex {import("knex")}
 */
exports.down = function(knex) {
  return knex.schema.dropTable("agent");
};
