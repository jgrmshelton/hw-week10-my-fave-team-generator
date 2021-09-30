const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
  constructor(fullName, id, email, github) {
    super(fullName, id, email);
    this.github = github;
  }

  getRole() {} // Overwritten to return 'engineer'
  getGithub() {}
}

module.exports = Engineer;
