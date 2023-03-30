// Imports and requires Inquirer
const inquirer = require("inquirer");

const generatorMenu = () => {
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

// Add manager
const addManager = () => {
  inquirer.prompt([
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
  ]);
  generatorMenu();
};

const finish = () => {
  
};

// Add an employee
const addEngineer = () => {
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
  ]);
};


const addIntern = () => {
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
  ]);
};

addManager();