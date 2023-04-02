const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  test("should render a card for an engineer", () => {
    const name = "Harriet Honkle";
    const employee_id = "2";
    const email = "hhonkle@gmail.com";
    const github = "Honkler";
    const expectedHtml = `<li>
  <div class="card">
    <ul>
      <li>Engineer</li>
      <li>Harriet Honkle (ID: 2)</li>
      <a href="mailto:hhonkle@gmail.com">
        <li>hhonkle@gmail.com</li>
      </a>
      <a href="https://github.com/Honkler">
        <li>GitHub profile: Honkler</li>
      </a>
    </ul>
  </div>
</li>`;
    const item = new Engineer(name, employee_id, email, github);
    expect(item.render()).toEqual(expectedHtml);
  });
});
