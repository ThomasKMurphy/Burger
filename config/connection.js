//  Set-up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',	
	user: 'ajbdn8jvxz4a4zq4',	
	password: 'zjvduyms87vzoqiq',
	database: 'pkhhgf4i94mkpsni'
});

// Make connection
connection.connect(function(error) {
  if (error) {
    console.error('error connecting: ' + error.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;






