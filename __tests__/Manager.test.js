const Manager = require("../lib/manager.js");

describe("Manager", () => {
  test("should render a card for a manager", () => {
    const name = "Bob Baker";
    const employee_id = "1";
    const email = "bbaker@gmail.com";
    const office = "1";
    const expectedHtml = `<li>
  <div class="card">
    <ul>
      <li>Manager</li>
      <li>Bob Baker (ID: 1)</li>
      <a href="mailto:bbaker@gmail.com">
        <li>bbaker@gmail.com</li>
      </a>
      <li>Office number: 1</li>
    </ul>
  </div>
</li>`;
    const item = new Manager(name, employee_id, email, office);
    expect(item.render()).toEqual(expectedHtml);
  });
});
