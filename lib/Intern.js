const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, employee_id, email, school) {
    super(name, employee_id, email);
    this.school = school;
  }
  renderInnerHtml() {
    return `${this.name}, ${this.employee_id}, ${this.email}, ${this.school}`;
  }
  render() {
    let classNames = "";
    return `<li class="${classNames}">${this.renderInnerHtml()}</li>`;
  }
}

module.exports = Intern;
