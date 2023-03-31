// Imports and requires Inquirer
const inquirer = require("inquirer");
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class CLI {
  constructor() {
    this.title = '';

    // Array of employee objects
    this.team = [];
  }

  // Add manager
  addManager = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?\n"
      },
      {
        type: "input",
        name: "employee_id",
        message: "What is the employee id number of the manager?\n",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address of the manager?\n",
      },
      {
        type: "input",
        name: "office",
        message: "What is the office number of the manager?\n",
      }
    ])
    .then(({ name },{ employee_id }, { email }, { office }) => {
      this.title = `${name}'s Team`;
      this.team.push({name, employee_id, email, office });
      return this.generatorMenu();
    });
  };

  generatorMenu = () => {
    inquirer.prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do? (Use the arrow keys to cycle through options and Enter to select the highlighted one)\n",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish and Generate"
        ], 
      },
    ])
    .then((answers) => {
      switch (answers.menu) {
        case "Add an Engineer": {
          return addEngineer()
        }
        case "Add an Intern": {
          return addIntern()
        }
        case "Finish and Generate": {
          return finish()
        }
      }
  });
  };

  // Add an employee
  addEngineer = () => {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is this engineer's name?\n"
      },
      {
        type: "input",
        name: "employee_id",
        message: "What is the employee id number of this engineer?\n",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address of this engineer?\n",
      },
      {
        type: "input",
        name: "github",
        message: "What is the GitHub username of this engineer?\n",
      }
    ])
    .then(({ name, employee_id, email, github }) => {
      this.team.push({name, employee_id, email, github });
      return this.generatorMenu();
    });
  };


  addIntern = () => {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is this intern's name?\n"
      },
      {
        type: "input",
        name: "employee_id",
        message: "What is the employee id number of this intern?\n",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address of this intern?\n",
      },
      {
        type: "input",
        name: "school",
        message: "What is the name of the school this intern goes to?\n",
      }
    ])
    .then(({ name, employee_id, email, school }) => {
      this.team.push({name, employee_id, email, school });
      return this.generatorMenu();
    });
  };

  finish = () => {
    return writeFile(
      join(__dirname, '..', 'output', 'team.html'),
      createDocument(this.title, this.team)
    )
    .then(() => console.log('Created team.html'))
    .catch((err) => {
      console.log(err);
      console.log('Oops. Something went wrong.');
    });
  }
}
module.exports = CLI;