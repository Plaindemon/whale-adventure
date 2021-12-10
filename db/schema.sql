-- A database is a collection of interrelated data. This data is stored in one or more tables that are related to one another.

DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;

USE store_db;

-- A table is composed of rows and columns. A column represents a field. A row represents a record.
CREATE TABLE department(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
  department_id INTEGER NOT NULL
  PRIMARY KEY (department_id)
);

CREATE TABLE roles(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(14,2) NOT NULL,
  FOREIGN KEY (role_id) REFERENCES department(department_id)
);

CREATE TABLE employee(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  FOREIGN KEY (role_id) REFERENCES department(department_id),
  manager_id INTEGER NULL
);

CREATE TABLE person (
  person_id INT NOT NULL, 
  PRIMARY KEY (person_id)
);

CREATE TABLE hobby (
  hobby_id INT NOT NULL,
  person_id INT NOT NULL,
  PRIMARY KEY(hobby_id),
  FOREIGN KEY(person_id) REFERENCES person(person_id)
);
