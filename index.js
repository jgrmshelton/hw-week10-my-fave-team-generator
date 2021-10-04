const inquirer = require("inquirer");

inquirer.prompt([{}]);
var teamRoster = `
<!DOCTYPE html>
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
      <div style="border: solid 1px black; width: 25%; height: 200px; text-align: center">Manager</div>
      <div style="border: solid 1px black; width: 25%; height: 200px"></div>
      <div style="border: solid 1px black; width: 25%; height: 200px"></div>
      <div style="border: solid 1px black; width: 24.6%; height: 200px"></div>
    </section>
  </body>
</html>`;
