class Employee {
  constructor(fullName, id, email) {
    this.fullName = fullName;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.fullName;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole(employee) {
    if (employee === "Employee") {
      return employee;
    }
  }
}

module.exports = Employee;
