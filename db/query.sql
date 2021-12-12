--A query is a request for data from a database table or a combination of tables.


-- -- Query to select all the employees from the table employee within the database store
-- SELECT * FROM employee;

-- // GET a single department
-- // db.query(`SELECT * FROM department WHERE id = 1`, (err, row) => {
-- //   if (err) {
-- //     console.log(err);
-- //   }
-- //   console.log(row);
-- // });
-- // GET a single role
-- // db.query(`SELECT * FROM roles WHERE id = 1`, (err, row) => {
-- //   if (err) {
-- //     console.log(err);
-- //   }
-- //   console.log(row);
-- // });
-- // GET a single employee
-- // db.query(`SELECT * FROM employee WHERE id = 1`, (err, row) => {
-- //   if (err) {
-- //     console.log(err);
-- //   }
-- //   console.log(row);
-- // });

-- // Delete a department
-- // db.query(`DELETE FROM department WHERE id = ?`, 1, (err, result) => {
-- //   if (err) {
-- //     console.log(err);
-- //   }
-- //   console.log(result);
-- // });
-- // // Delete a role
-- // db.query(`DELETE FROM roles WHERE id = ?`, 1, (err, result) => {
-- //   if (err) {
-- //     console.log(err);
-- //   }
-- //   console.log(result);
-- // });
-- // // Delete a employee
-- // db.query(`DELETE FROM employee WHERE id = ?`, 1, (err, result) => {
-- //   if (err) {
-- //     console.log(err);
-- //   }
-- //   console.log(result);
-- // });


-- // Create a department query
-- // const sql = `
-- //   INSERT INTO department (id, department_name) 
-- //   VALUES 
-- //     (?,?)`;
-- // const params = [11, 'HR'];

-- // db.query(sql, params, (err, result) => {
-- //   if (err) {
-- //     console.log(err);
-- //   }
-- //   console.log(result);
-- // });