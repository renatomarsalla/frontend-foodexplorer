
exports.up = knex => knex.schema.createTable('ingredientsDrink', table => {
  table.increments('id');
  table.text('ingredients').notNullable();

  table.integer('dish_id').references('id').inTable('drinks').onDelete("CASCADE");

});


exports.down = knex => knex.schema.dropTable('ingredientsDrink');
