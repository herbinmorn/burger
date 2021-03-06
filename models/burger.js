// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
//cb =callback 
var burger = {
  all: function(cb) {
    orm.all(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(vals, cb) {
    orm.create(vals, function(res) {
      cb(res);
    });
  },
  // update: function(objColVals, condition, cb) {
  //   orm.update("burgers", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // }
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", "devoured = 1", condition, cb);
  }

};

// Export the database functions for the controller.






module.exports = burger;