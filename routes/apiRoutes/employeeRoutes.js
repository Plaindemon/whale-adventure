const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

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

module.exports = router;
  
  