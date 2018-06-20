// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burger_name, cb) {
    orm.create("burgers", [
      "burger_name"
    ], [
      burger_name
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      delivered: true
    }, condition, cb);
  },
};

// Export the database functions for the controller
module.exports = burger;
