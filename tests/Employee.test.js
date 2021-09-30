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
      var getName = worker.getName("Tino");
      expect(getName).toEqual(worker.fullName);
    });
  });
  describe("getName should NOT return name if names are unequal", () => {
    it("getName should return UNDEFINED", () => {
      const worker = new Employee("Tino", 1234, "test@test.com");
      var getName = worker.getName("Jeremy");
      expect(getName).not.toEqual(worker.fullName);
    });
  });
  describe("Should return id from id property", () => {
    it("Should return id value from id property on initialized object if id values are equal", () => {
      const worker = new Employee("Tino", 1234, "test@test.com");
      var getId = worker.getId(1234);
      expect(getId).toEqual(worker.id);
    });
  });
});
