const Header = require("./header.js");
const EmployeeList = require("./EmployeeList.js");
const Manager = require("./Manager.js")
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");

function createDocument(title, team = []) {
  const header = new Header().render();
  const employees = team.map(
    (t) => new Manager(t.name, t.employee_id, t.email, t.office),
    (t) => new Engineer(t.name, t.employee_id, t.email, t.github),
    (t) => new Intern(t.name, t.employee_id, t.email, t.school)
  );
  const employeeList = new EmployeeList(employees).renderInnerHtml();

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        ${header}
        ${employeeList}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
