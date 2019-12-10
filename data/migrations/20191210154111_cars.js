
exports.up = function(knex) {
  return knex.schema.createTable("cars", function(cars) {
    cars.increments();

    cars.string("VIM", 128).notNullable();
    cars.string("make", 128).notNullable();
    cars.string("model", 128).notNullable();
    cars.integer("millage").notNullable();
    cars.string("transmission_type", 128);
    cars.string("title_status", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
