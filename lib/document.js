const Header = require('./header.js');
const EmployeeList = require('./EmployeeList.js');
const Employee = require('./Employee.js');

function createDocument(title, team = []) {
  const header = new Header().render();
  const employees = team.map(
    (t) => new Employee([t.text], t.priority)
  );
  const employeeList = new EmployeeList(employees).render();

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
