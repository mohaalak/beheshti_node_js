const Knex = require("knex");


module.exports = Knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'ha48441FB!',
    database: 'beheshti'
  }
});