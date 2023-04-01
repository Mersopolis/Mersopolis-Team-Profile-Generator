const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, employee_id, email, github) {
    super(name, employee_id, email);
    this.github = github;
  }
  renderInnerHtml() {
    return `${this.name}, ${this.employee_id}, ${this.email}, ${this.github}`;
  }
  render() {
    let classNames = "";
    return `<li class="${classNames}">${this.renderInnerHtml()}</li>`;
  }
}

module.exports = Engineer;
