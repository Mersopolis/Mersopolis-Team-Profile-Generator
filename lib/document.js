const EmployeeList = require("./EmployeeList.js");

function createDocument(title, team = []) {
  const employeeList = new EmployeeList(team).renderInnerHtml();

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
    <header class="header">
      <h1>${title}</h1>
    </header>
    <main>
      ${employeeList}
    </main>
  </body>
</html>`;
}

module.exports = { createDocument };
