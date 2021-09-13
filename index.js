const { generateMarkdown, renderLicenseLink, renderLicenseSection, renderLicenseBadge} = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application
legalMaker = require('./utils/generateMarkdown')
inquirer = require('inquirer');
fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["What is your name/username?", "What is the name of your project?", "Provide a description of your project", "How do you install your project?", "What are some features of your project?", "What license do you want to register your project under?"];

inquirer
    .prompt ([
      {type: "input",
       message: questions[0],
       name: "userName"
      },
      {type: "input",
       message: questions[1],
       name: "projectName"
      },
     {type: "input",
      message: questions[2],
      name: "description"
     },
     {type: "input",
      message: questions[3],
      name: "installation"
     },
     {type: "input",
      message: questions[4],
      name: "features"
     },
     {type: "input",
      message: questions[5],
      name: "license"
     }])
     .then((answers) => {
        const data = generateMarkdown(answers.userName, answers.projectName, answers.description, answers.installation, answers.features, answers.license);
        const fileName = `${answers.projectName}_README.md`
        writeToFile(fileName, data);

});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("commit logged!"))
}


