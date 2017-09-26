// Import MySQL connection
var connection = require('./connection.js');

// Object for SQL statement functions
var orm = {

  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function(error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },

  update: function(tableInput, condition, cb) {
    connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function(error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },

  create: function(tableInput, value, cb) {
    connection.query('INSERT INTO ' + tableInput + ' (burger_name) VALUES ("' + value + '");', function(error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  }

};

// Export orm object for the model (burger.js)
module.exports = orm;