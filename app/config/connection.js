// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var mysql = require("mysql");
var Sequalize = require("sequalize")

var sequelize = new Sequelize("sequelize_chirpy", "root", "D5n6sa4R2211", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


// Setting up our connection information
var source = {
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "D5n6sa4R2211",
    database: "starwars"
  }
};


// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection, sequelize;
