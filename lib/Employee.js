class Employee {
  constructor(fullName, id, email) {
    this.fullName = fullName;
    this.id = id;
    this.email = email;
  }

  getName(name) {
    if (this.fullName === name) {
      return this.fullName;
    } else {
      return undefined;
    }
  }

  getId(id) {
    if (this.id === id) {
      return this.id;
    }
  }

  getEmail() {}

  getRole() {}
}

module.exports = Employee;
