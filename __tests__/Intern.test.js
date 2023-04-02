const Intern = require("../lib/intern.js");

describe("Intern", () => {
  test("should render a card for an intern", () => {
    const name = "Timmy Torda";
    const employee_id = "3";
    const email = "ttorda@gmail.com";
    const school = "Test University";
    const expectedHtml = `<li>
  <div class="card">
    <ul>
      <li>Intern</li>
      <li>Timmy Torda (ID: 3)</li>
      <a href="mailto:ttorda@gmail.com">
        <li>ttorda@gmail.com</li>
      </a>
      <li>School: Test University</li>
    </ul>
  </div>
</li>`;
    const item = new Intern(name, employee_id, email, school);
    expect(item.render()).toEqual(expectedHtml);
  });
});
