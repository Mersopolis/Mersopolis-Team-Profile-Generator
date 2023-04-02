const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  test("should return a name for an employee", () => {
    const name = "Jen Jefferson";
    const employee_id = "4";
    const email = "jjefferson@gmail.com";
    const expectedOutcome = "Jen Jefferson";
    const item = new Employee(name, employee_id, email);
    expect(item.getName()).toEqual(expectedOutcome);
  });

  test("should return an id for an employee", () => {
    const name = "Jen Jefferson";
    const employee_id = "4";
    const email = "jjefferson@gmail.com";
    const expectedOutcome = "4";
    const item = new Employee(name, employee_id, email);
    expect(item.getId()).toEqual(expectedOutcome);
  });

  test("should return an email for an employee", () => {
    const name = "Jen Jefferson";
    const employee_id = "4";
    const email = "jjefferson@gmail.com";
    const expectedOutcome = "jjefferson@gmail.com";
    const item = new Employee(name, employee_id, email);
    expect(item.getEmail()).toEqual(expectedOutcome);
  });

  test("should return 'Employee'", () => {
    const name = "Jen Jefferson";
    const employee_id = "4";
    const email = "jjefferson@gmail.com";
    const expectedOutcome = "Employee";
    const item = new Employee(name, employee_id, email);
    expect(item.getRole()).toEqual(expectedOutcome);
  });
});
