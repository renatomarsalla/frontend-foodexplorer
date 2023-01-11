exports.up = knex => knex.schema.createTable('orders', table => {
  table.increments('id');
  table.text('name').notNullable();
  table.text('image');
  table.text('quantity').notNullable();
  table.text('price').notNullable();
  table.text('total').notNullable();

  table.integer('user_id').references('id').inTable('users').onDelete("CASCADE");

});


exports.down = knex => knex.schema.dropTable('orders');