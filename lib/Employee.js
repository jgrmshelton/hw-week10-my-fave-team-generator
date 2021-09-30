class Employee {
  constructor(fullName, id, email) {
    this.fullName = fullName;
    this.id = id;
    this.email = email;
  }

  getName(name) {
    if (this.fullName === name) {
      return this.fullName;
    }
  }

  getId(id) {
    if (this.id === id) {
      return this.id;
    }
  }

  getEmail(email) {
    if (this.email === email) {
      return this.email;
    }
  }

  getRole(employee) {
    if (employee === "employee") {
      return "employee";
    }
  }
}

module.exports = Employee;
