const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');

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
// Get all departments 
app.get('/api/department', (req, res) => {
  const sql = `SELECT * FROM department`;

  // Query database table department
  db.query(`SELECT * FROM department`, (err, rows) => {
    if (err) { 
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
})

// Get all roles
app.get('/api/roles', (req, res) => {
  // // Query database table roles
  db.query(`SELECT * FROM roles`, (err, rows) => {
    if (err) { 
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
})

// Get all Employees
app.get('/api/employee', (req, res) => {
  // Query database table employee
  db.query(`SELECT * FROM employee`, (err, rows) => {
    if (err) { 
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
})

// Create a department
app.post('/api/department', ({ body}, res) => {
  const errors = inputCheck(body, 'id', 'department_name');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO department (id, department_name)
    VALUES (?,?)`;
  const params = [body.id, body.department_name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
})


// Delete a single department
app.delete('/api/department', (req, res) => {
  const sql = `DELETE FROM department WHERE id = ?`;
  const params = [req.params.id];
  // Delete a department
  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Department not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
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
