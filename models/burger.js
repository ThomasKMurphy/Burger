// Import the orm to create functions that will interact with the database
var orm = require('../config/orm.js');

var burger = {

  all: function(cb) {
    orm.all('burgers', function(response) {
      cb(response);
    })
  },

  update: function(id, cb) {
    orm.update('burgers', id, function(response) {
      cd(response);
    })
  },

  create: function(name, cb) {
    orm.create('burgers', name, function(response) {
      cd(response);
    })
  },

};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;