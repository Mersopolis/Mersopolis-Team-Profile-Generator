const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, employee_id, email, school) {
    super(name, employee_id, email);
    this.school = school;
  }
  renderInnerHtml() {
    return `<li>Intern</li><li>${this.name} (ID: ${this.employee_id})</li>
    <a href="mailto:${this.email}"><li>${this.email}</li></a>
    <li>School: ${this.school}</li>`;
  }
  render() {
    let classNames = "";
    return `<li class="${classNames}">
  <div class="card">
    <ul>${this.renderInnerHtml()}</ul>
  </div>
</li>`;
  }
}

module.exports = Intern;
