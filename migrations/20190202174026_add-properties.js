/**
 *
 * @param knex {import("knex")}
 */
exports.up = function(knex) {
  return knex.schema.createTable("properties", table => {
    table.string("id").primary();
    table.string("city");
    table.string("description");
    table.string("address");
    table.string("agentId");
    table.decimal("price", 6, 2);
  });
};

/**
 *
 * @param knex {import("knex")}
 */
exports.down = function(knex) {
  return knex.schema.dropTable("properties");
};
