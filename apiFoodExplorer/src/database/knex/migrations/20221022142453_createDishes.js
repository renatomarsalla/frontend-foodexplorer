
exports.up = knex => knex.schema.createTable("dishes", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.text("description").notNullable();
  table.text("price").notNullable();
  table.text("image");
});


exports.down = knex => knex.schema.dropTable("dishes");
