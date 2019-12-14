const connection = require("./connection")
const news = [];

let id = 1;
module.exports = {
  get: () => {
    return connection.select().from("news");
  },
  create: (data) => {
    return connection.insert(data).into("news")
  },
  update: (id, data) => {
    return connection("news").update(data).where('id', id)
  }
}