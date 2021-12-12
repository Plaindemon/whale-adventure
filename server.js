const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3003;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// Query database
db.query(`SELECT * FROM department`, (err, rows) => {
  console.log(rows);
});
// Query database
db.query(`SELECT * FROM roles`, (err, rows) => {
  console.log(rows);
});
// Query database
db.query(`SELECT * FROM employee`, (err, rows) => {
  console.log(rows);
});
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});
// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => console.log('Now listening'));
