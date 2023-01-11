
exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments('id');
  table.text('ingredients').notNullable();

  table.integer('dish_id').references('id').inTable('dishes').onDelete("CASCADE");

});


exports.down = knex => knex.schema.dropTable('ingredients');



// exports.up = knex => knex.schema.createTable('orders', table => {
//   table.increments('id');
//   table.text('name').notNullable();
//   table.text('image').notNullable();
//   table.text('quantity').notNullable();
//   table.text('price').notNullable();
//   table.text('total').notNullable();

//   table.integer('user_id').references('id').inTable('users').onDelete("CASCADE");

// });


// exports.down = knex => knex.schema.dropTable('orders');