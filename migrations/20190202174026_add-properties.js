/**
 *
 * @param knex {import("knex")}
 */
exports.up = function(knex) {
  return knex.schema.createTable("property", table => {
    table.string("id").primary();
    table.string("city").notNullable();
    table.string("description").notNullable();
    table.string("address").notNullable();
    table.string("propertyType").notNullable();
    table.string("agentId");
    table.decimal("price", 6, 2).notNullable();
  });
};

/**
 *
 * @param knex {import("knex")}
 */
exports.down = function(knex) {
  return knex.schema.dropTable("property");
};
