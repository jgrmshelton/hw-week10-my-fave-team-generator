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
  describe("Should return name from name property.", () => {
    it("Should return the name value stored in the property called 'name' if name values are equal", () => {
      const worker = new Employee("Tino", 1234, "test@test.com");
      const getName = worker.getName();
      expect(getName).toEqual(worker.fullName);
    });
  });
  describe("Should return id from id property", () => {
    it("Should return id value from id property on initialized object if id values are equal", () => {
      const worker = new Employee("Tino", 1234, "test@test.com");
      const getId = worker.getId();
      expect(getId).toEqual(worker.id);
    });
  });
  describe("Email should be returned", () => {
    it("Email should return if email entered matches email entered as argument", () => {
      const worker = new Employee("Tino", 1234, "test@test.com");
      const getEmail = worker.getEmail();
      expect(getEmail).toEqual(worker.email);
    });
  });
  describe("Job role should be returned", () => {
    it("Should return 'Employee' as a string value", () => {
      const worker = new Employee("Tino", 1234, "test@test.com");
      const jobRole = worker.getRole("Employee");
      expect(jobRole).toEqual("Employee");
    });
  });
});
