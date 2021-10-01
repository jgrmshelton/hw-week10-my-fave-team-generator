const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
  constructor(fullName, id, email, github) {
    super(fullName, id, email);
    this.github = github;
  }

  getRole(engineer) {
    if (engineer === "Engineer") {
      return engineer;
    }
  } // Overwritten to return 'Engineer'
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
