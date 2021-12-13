const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

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
  
  module.exports = router;