const Employee = require("../lib/Employee.js");

class Intern extends Employee {
  constructor(fullName, id, email, school) {
    super(fullName, id, email);
    this.school = school;
  }
  getRole() {}
  getSchool() {}
}

module.exports = Intern;
