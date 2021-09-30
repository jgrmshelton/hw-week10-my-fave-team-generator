const Employee = require("./lib/Employee.js");

const worker = new Employee("John Doe", 1234, "test@test.com");

console.log(worker.getRole("manager"));
