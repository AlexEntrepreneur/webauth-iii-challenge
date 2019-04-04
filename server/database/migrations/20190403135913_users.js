
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (tableColumn) => {
    tableColumn.increments();

    tableColumn
      .text('username')
      .unique('uq_username')
      .notNullable();

    tableColumn
      .text('password')
      .notNullable();

    tableColumn
      .text('department')
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
