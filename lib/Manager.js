const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, employee_id, email, office) {
    super(name, employee_id, email);
    this.office = office;
  }
  renderInnerHtml() {
    return `${this.name}, ${this.employee_id}, ${this.email}, ${this.office}`;
  }
  render() {
    let classNames = "";
    return `<li class="${classNames}">${this.renderInnerHtml()}</li>`;
  }
}

module.exports = Manager;
