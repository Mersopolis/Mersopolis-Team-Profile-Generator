const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, employee_id, email, office) {
    super(name, employee_id, email);
    this.office = office;
  }
  renderInnerHtml() {
    return `<li>Manager</li><li>${this.name} (ID: ${this.employee_id})</li>
    <a href="mailto:${this.email}"><li>${this.email}</li></a>
    <li>Office number: ${this.office}</li>`;
  }
  render() {
    let classNames = "";
    return `<li class="${classNames}">
  <div class="card">
    <ul>${this.renderInnerHtml()}</ul>
  </div>
</li>`;
  }
  getRole() {
    return "Manager"
  }
}

module.exports = Manager;
