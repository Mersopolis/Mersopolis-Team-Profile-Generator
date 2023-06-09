const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, employee_id, email, github) {
    super(name, employee_id, email);
    this.github = github;
  }
  renderInnerHtml() {
    return `<li>Engineer</li>
      <li>${this.name} (ID: ${this.employee_id})</li>
      <a href="mailto:${this.email}">
        <li>${this.email}</li>
      </a>
      <a href="https://github.com/${this.github}">
        <li>GitHub profile: ${this.github}</li>
      </a>`;
  }
  render() {
    return `<li>
  <div class="card">
    <ul>
      ${this.renderInnerHtml()}
    </ul>
  </div>
</li>`;
  }
  getGitHub() {
    return this.github;
  }
  getRole() {
    return "Engineer"
  }
}

module.exports = Engineer;
