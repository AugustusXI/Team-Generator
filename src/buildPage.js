const createTeam = (team) => {
  console.log("Team:", team);
  let html = [];

  for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    switch (teamMember.getRole()) {
      case "Manager":
        html.push(createManager(teamMember));
        break;
      case "Engineer":
        html.push(createEngineer(teamMember));
        break;
      case "Intern":
        html.push(createIntern(teamMember));
        break;
      default:
        throw "404 Team Member Role not found";
    }
  }
  return html.join("");
};
const createManager = (manager) => {
  let managerCard = `
<div class="card">
<div class="card-header">
      <p class="title is-3">${manager.getRole()}</p>
      </div>
    <div class="card-content">
      <p class="title is-4">${manager.getName()} ID: ${manager.getId()}</p>
      <p class="subtitle is-6"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li></p>
      <p class="subtitle is-6">
        Office Number:${manager.getOfficeNumber()} </p>
  </div>
</div>
`;
  return managerCard;
};
const createEngineer = (engineer) => {
  let engineerCard = `
<div class="card">
<div class="card-header">
      <p class="title is-3">${engineer.getRole()}</p>
      </div>
    <div class="card-content">
      <p class="title is-4">${engineer.getName()} ID: ${engineer.getId()}</p>
      <p class="subtitle is-6"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li></p>
      <p class="subtitle is-6">
        GithubUsername:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a> </p>
  </div>
</div>
`;
  return engineerCard;
};
const createIntern = (intern) => {
  let internCard = `
<div class="card">
<div class="card-header">
      <p class="title is-3">${intern.getRole()}</p>
      </div>
    <div class="card-content">
      <p class="title is-4">${intern.getName()} ID: ${intern.getId()}</p>
      <p class="subtitle is-6"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li></p>
      <p class="subtitle is-6">
        School:${intern.getSchool()} </p>
  </div>
</div>
`;
  return internCard;
};

module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <script src="https://kit.fontawesome.com/6077186dc8.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <h1 class= is-primary is-large> Team Profile Generator</h1>
    </header>

    ${createTeam(team)}
    
</body>
</html>
    `;
};
