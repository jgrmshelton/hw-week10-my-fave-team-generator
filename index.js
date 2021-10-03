const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern");

const worker = new Employee("John Doe", 1234, "test@test.com");
const developer = new Engineer(
  "Tino",
  3456,
  "mrcarrier1998@gmail.com",
  "TinoTC"
);
const student = new Intern("Jane Doe", 5678, "jane@jane.com", "UTSA");

console.log(worker);
console.log(developer);
console.log(`${worker.fullName} job role:`, worker.getRole("Employee"));
console.log(`${developer.fullName} job role:`, developer.getRole("Engineer"));
console.log("This developer's github is: " + developer.getGithub());
console.log(worker.email);
console.log(developer.email);
console.log(worker.getName());
console.log(developer.getName());
console.log(student.getSchool());
console.log(student.fullName);
