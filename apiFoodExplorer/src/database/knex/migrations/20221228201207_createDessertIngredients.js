
exports.up = knex => knex.schema.createTable('ingredientsDessert', table => {
  table.increments('id');
  table.text('ingredients').notNullable();

  table.integer('dish_id').references('id').inTable('desserts').onDelete("CASCADE");

});


exports.down = knex => knex.schema.dropTable('ingredientsDessert');
