const Manager = require("../lib/Manager.js");

describe("Object Instantiation", () => {
  it("Should create an object with name, if email and officeNumber properties", () => {
    const boss = new Manager("Mr.Carrier", 1987, "boss@boss.com", "o234");
    expect(boss).toEqual({
      fullName: "Mr.Carrier",
      id: 1987,
      email: "boss@boss.com",
      officeNumber: "o234",
    });
  });
  it("Should overwrite the getRole() method to return 'Manager'", () => {
    const boss = new Manager("Mr.Carrier", 1987, "boss@boss.com", "o234");
    expect(boss.getRole()).toEqual("Manager");
  });
});
