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



// GET single department
app.get('/api/department/:id', (req, res) => {
  const sql = `SELECT * FROM department WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, rows) => {
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
// GET single role 
app.get('/api/roles/:id', (req, res) => {
  const sql = `SELECT * FROM roles WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, rows) => {
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
// GET single employee 
app.get('/api/employee/:id', (req, res) => {
  const sql = `SELECT * FROM employee WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});




// Create a single department
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
// Create a single role
app.post('/api/roles', ({ body}, res) => {
  const errors = inputCheck(body, 'id', 'title', 'salary', 'role_id', 'department_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO roles (id, 'title', 'salary', 'role_id', 'department_id')
    VALUES (?,?)`;
  const params = [body.id, body.title, body.salary, body.role_id, body.department_id];

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
// create a single employee
app.post('/api/employee', ({body}, res) => {
  const errors = inputCheck(body, 'id', 'title', 'salary', 'role_id', 'department_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO employee (id, 'first_name', 'last_name', 'role_id', 'manager_id')
    VALUES (?,?)`;
  const params = [body.id, body.first_name, body.last_name, body.role_id, body.manager_id];

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


// update a department
app.put('/api/department/:id', (req, res) => {
  const errors = inputCheck(req.body, 'department_name');

  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `UPDATE department SET department_name = ? 
               WHERE id = ?`;
  const params = [req.body.department_name, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: 'Department not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});
// Update a role
app.put('/api/roles/:id', (req, res) => {
  const errors = inputCheck(req.body, 'title');

  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `UPDATE roles SET title = ? 
               WHERE id = ?`;
  const params = [req.body.title, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: 'Role not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});
// update an employee
app.put('/api/employee/:id', (req, res) => {
  const errors = inputCheck(req.body, 'first_name', 'last_name');

  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `UPDATE employee SET first_name = ? last_name = ?
               WHERE id = ?`;
  const params = [req.body.first_name, req.body.last_name, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: 'employee not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});


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

// Delete a single role
app.delete('/api/roles', (req, res) => {
  const sql = `DELETE FROM roles WHERE id = ?`;
  const params = [req.params.id];

  // Delete a role
  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Role not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });

})

// Delete a single employee
app.delete('/api/employee', (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ?`;
  const params = [req.params.id];

  // Delete a role
  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Employee not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });

})

























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
