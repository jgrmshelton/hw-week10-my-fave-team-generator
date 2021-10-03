const Intern = require("../lib/Intern.js");

describe("Object Instantiation", () => {
  it("Should create an object with name, id, email and school properties", () => {
    const student = new Intern("Jane Doe", 5678, "jane@jane.com", "UTSA");
    expect(student).toEqual({
      fullName: "Jane Doe",
      id: 5678,
      email: "jane@jane.com",
      school: "UTSA",
    });
  });
  it("Should redefine the getRole() method to output 'Intern'", () => {
    var student = new Intern("jane Doe", 5678, "jane@jane.com", "UTSA");
    expect(student.getRole()).toEqual("Intern");
  });
  it("Should return name of school as a string", () => {
    var student = new Intern("Jane Doe", 5678, "jane@jane.com", "UTSA");
    expect(student.getSchool()).toEqual(student.school);
  });
});
