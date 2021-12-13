const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'blueSalamander',
      database: 'store_db'
    },
    console.log(`Connected to the store_db database.`)
  );

  module.exports = db;