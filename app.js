
const fs = require('fs');
// const util = require("util");
var inquirer = require('inquirer');
const Connection = require('mysql/lib/Connection');

var commandLineArgs = process.argv;
console.log(commandLineArgs);


// TODO: Create an array of questions for user input

const employeeManager = [
    { 
        type: 'list',
        name: 'begin',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Departments', 'View All']
    }
];

const departmentQuestions = [
    /* Pass your questions in here */
  {
    type: 'input',
    name: 'department_name',
    message: 'What is the name of the department?',

  },
  {
    type: 'input',
    name: 'department_id',
    message: 'What is the departments Id number?',

  }
];

const rolesQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the employees job title?',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of your employee?',
    }
];

const employeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of your employee?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the last name of your employee?',
  },
]



// console.log(inquirer);


const promptUser = () => {
    console.log(`
    ==================
     EMPLOYEE TRACKER
    ==================
    `);
    return inquirer
    .prompt(employeeManager)
      .then(function(answers){
      // Use user feedback for... whatever!!
      if(answers.begin === 'View All Employees'){
      // connection.query("SELECT * FROM department")
      console.log("view all employees is success")
      } else
          console.log((answers));
          console.table((answers));
  
      })
  }

  // TODO: Create a function to initialize app
  function init() {
    // prompt user uses the prompt function to start asking the questions
    promptUser();
    // writeToFile();
  }
  // Function call to initialize app
  init();