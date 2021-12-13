-- A database is a collection of interrelated data. This data is stored in one or more tables that are related to one another.

DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;

USE store_db;
--  drops all the tables if they exist then creates the tables
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;
-- A table is composed of rows and columns. A column represents a field. A row represents a record.
CREATE TABLE department(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);
-- A foreign key is a field in one table that references the primary key of another table
CREATE TABLE roles(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(14,2) NOT NULL,
  role_id INTEGER NOT NULL,
  department_id INTEGER
  CONSTRAINT fk_department 
    FOREIGN KEY (department_id) 
    REFERENCES department(id) 
    ON DELETE SET NULL
);

CREATE TABLE employee(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER NULL,
  CONSTRAINT fk_role_id
    FOREIGN KEY (role_id) 
    REFERENCES roles(id)
);


-- RUN in the command line in mysql shell
-- source db/schema.sql
-- source db/seeds.sql

-- RUN a few queries
-- SELECT * FROM department;
-- SELECT * FROM roles;
-- SELECT * FROM employee;
