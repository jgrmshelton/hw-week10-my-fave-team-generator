const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "list",
      choices: ["Manager", "Employee", "Engineer", "Intern"],
      message: "Which job role are you adding? ",
      name: "jobTitle",
    },
    {
      type: "input",
      message: "Name ",
      name: "fullName",
    },
  ])
  .then((response) => {
    var teamRoster = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Gluten:wght@600&display=swap"
          rel="stylesheet"
        />
        <title>Document</title>
      </head>
      <body style="margin: 0; padding: 0">
        <header
          style="
            border: solid 1px black;
            height: 200px;
            background: rgb(236, 122, 141);
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <h1 style="font-family: 'Gluten', cursive; font-size: 3.5rem">
            My Team Roster
          </h1>
        </header>
        <section
          style="
            border: solid 1px black;
            background: rgb(255, 0, 43);
            display: flex;
            flex-wrap: nowrap;
          "
        >
          <div
            style="
              border: solid 1px black;
              width: 25%;
              height: 450px;
              text-align: center;
              font-size: 2rem;
            "
          >
            Manager
            <br />
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Name</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Email</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">ID</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Office Number</span>:
              <span></span>
            </h5>
          </div>
          <div
            style="
              border: solid 1px black;
              width: 25%;
              height: 450px;
              text-align: center;
              font-size: 2rem;
            "
          >
            Engineer
            <br />
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Name</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Email</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">ID</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Github</span>: <span></span>
            </h5>
          </div>
          <div
            style="
              border: solid 1px black;
              width: 25%;
              height: 450px;
              text-align: center;
              font-size: 2rem;
            "
          >
            Employee
            <br />
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Name</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Email</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">ID</span>: <span></span>
            </h5>
          </div>
          <div
            style="
              border: solid 1px black;
              width: 24.6%;
              height: 450px;
              text-align: center;
              font-size: 2rem;
            "
          >
            Intern
            <br />
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Name</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">Email</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">ID</span>: <span></span>
            </h5>
            <h5 style="text-align: left">
              <span style="text-decoration: underline">School</span>: <span></span>
            </h5>
          </div>
        </section>
      </body>
    </html>`;
  });
