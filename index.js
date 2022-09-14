const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const buildPage = require("./src/buildPage");
const path = require("path");
const fs = require("fs");
const RESULT_DIR = path.resolve(__dirname, "result");
const resultPath = path.join(RESULT_DIR, "generatedTeam.html");
const teamArray = [];

// ------------------------------------------------------

// function to choose which role the user would like to add
function addRole() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "roleSelection",
        message: "Select which role you would like to add to the team.",
        choices: ["Manager", "Engineer", "Intern", "My team is finished"],
      },
    ])
    .then((answer) => {
      switch (answer.roleSelection) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          fs.writeFile(resultPath, buildPage(teamArray), (err) => {
            if (err) throw err;
            console.log("team file generated");
          });
      }
    });
}
// ----------------------------------------------------------

// prompt to add the manager into the application
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the manager",
        default: "",
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter the employee ID",
        default: "",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Enter the manager's email address",
        default: "",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number",
        default: "",
      },
    ])
    .then((manager) => {
      let newManager = new Manager(
        manager.name,
        manager.employeeId,
        manager.emailAddress,
        manager.officeNumber
      );
      teamArray.push(newManager);
      addRole();
    });
}
// -----------------------------------------------------

// function to prompt the user for adding an employee
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the engineer",
        default: "",
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter the employee ID",
        default: "",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Enter the engineer's email address",
        default: "",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "Enter the engineer's github username",
        default: "",
      },
    ])
    .then((engineer) => {
      let newEngineer = new Engineer(
        engineer.name,
        engineer.employeeId,
        engineer.emailAddress,
        engineer.githubUsername
      );
      teamArray.push(newEngineer);
      addRole();
    });
}
// ----------------------------------------------------------

// function to prompt the questions to add an intern
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the name of the intern",
        default: "",
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter the employee ID",
        default: "",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Enter the intern's email address",
        default: "",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school",
        default: "",
      },
    ])
    .then((intern) => {
      let newIntern = new Intern(
        intern.name,
        intern.employeeId,
        intern.emailAddress,
        intern.school
      );
      teamArray.push(newIntern);
      addRole();
    });
}

addRole();
