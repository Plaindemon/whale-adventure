
const fs = require('fs');
// const util = require("util");
const generateMarkdown = require('./generateMarkdown');
var inquirer = require('inquirer');

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
        message: 'What is the title of your project?',
    }
];

const employeeQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    }
]



// console.log(inquirer);


const promptUser = () => {
    console.log(`
    =================
        TEXT HERE 
    =================
    `);
    return inquirer
    .prompt(departmentQuestions)
      .then((answers) => {
          // Use user feedback for... whatever!!
        //   const pageInfo = generateMarkdown(answers);
  
          console.log((answers));
          console.table((answers));
        //   console.log(pageInfo);
  
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