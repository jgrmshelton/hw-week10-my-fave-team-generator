var Employee = require("./lib/Employee.js");
var Manager = require("./lib/Manager.js");
var Enginner = require("./lib/Engineer.js");

var worker1 = new Employee("John Doe", 1234, "test@test.com");
var manager1 = new Manager(
  "Tino Carrier",
  1324,
  "manager@manager.com",
  "o4321"
);
var engineer1 = new Enginner(
  "Jeremy",
  5678,
  "jeremy@jeremy.com",
  "CodePro-JHenry"
);

console.log(worker1);
console.log(manager1);
console.log(engineer1);
