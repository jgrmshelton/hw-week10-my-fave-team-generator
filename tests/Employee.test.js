const Employee = require("../lib/Employee.js");

describe("Object Instantiation", () => {
  it("Should create an object with name, id and email properties", () => {
    const worker = new Employee("Tino", 1234, "test@test.com");
    expect(worker).toEqual({
      fullName: "Tino",
      id: 1234,
      email: "test@test.com",
    });
  });
});
