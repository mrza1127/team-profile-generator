// creating a team

function buildTeam() {
    // creating a manager
    const createManager = Manager => {
        return `
        <div class="card employee-card">
        <div class="card-header bg-primary text-white" >
            <h2 class="card-title"> ${manager.getName()}</h2>
            <h3 class="card-title">
             `
    };
};

const generateTeam = (team) => {
    console.log(team);

    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 18rem;">
    <div class="card-header">
        ${manager.name}<br/>
        <i class="fas fa-mug-hot"></i>Manager</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">GitHub Username: <a target="blank" href="https://github.com/${manager.github}"> ${manager.github}</a></li>
        </ul>
    </div>
    `;
    html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
    <div class="card-header">
        ${engineer.name}<br/>
        <i class="fas fa-mug-hot"></i>Engineer</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">GitHub Username: <a target="blank" href="https://github.com/${engineer.github}"> ${engineer.github}</a></li>
        </ul>
    </div>
    `;
    html.push(engineerHtml)
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="card" style="width: 18rem;">
    <div class="card-header">
        ${intern.name}<br/>
        <i class="fas fa-mug-hot"></i>Engineer</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">GitHub Username: <a target="blank" href="https://github.com/${intern.github}"> ${intern.github}</a></li>
        </ul>
    </div>
    `;
    html.push(internHtml)
    }


for (let i=0; i < team.length; i++) {
    if(team[i].getRole() === "Manager") {
        generateManager(team[i]);
    }
    if(team[i].getRole() === "Engineer") {
        generateEngineer(team[i]);
    }
    if(team[i].getRole() === "Intern") {
        generateIntern(team[i]);
    }
};
        return html.join('');
}
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEAM PROFILE GENERATOR</title>
    <link rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/dist/style.css"/>
</head>
<body>
    <header>
        <h1>MY TEAM</h1>
    </header>
    <main>${generateTeam(team)}</main>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> 
</body>
</html>
`;
}