const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "How would you describe project?"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "How will this application be used?"
        },
        {
            type: "input",
            name: "contribution",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "test",
            message: "What commands are needed to test this project?"
        },
        {
            type: "list",
            name: "license",
            message: "Which license would is being used?",
            choices: [
                "ISC",
                "MIT",
                "IPA"
            ]
        },
        {
            type: "input",
            name: "username",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
    ]);
}

function generateREADME(answers) {
    return `# ${answers.title}

[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

## Description
    
${answers.description}
    
## Table of Contents
    
[Description](#description) 

[Installation Instructions](#installation-instructions) 

[Usage Information](#usage-information) 

[License](#license)  

[Contribution Guidelines](#contribution-guidelines) 

[Tests](#tests) 
 
[Questions](#questions)
    
## Installation Instructions

${answers.installation}
    
## Usage Information

${answers.usage}
    
## License

[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
This application uses the ${answers.license} license.  Click the badge to be brought to the full license.
    
## Contribution Guidelines

${answers.contribution}
    
## Tests

${answers.test}
    
## Questions

If you have any questions about the application, be sure to contact me at my [e-mail](mailto:${answers.email})

Alternatively you can find me and my other works at my [Github account](https://github.com/${answers.github})

`;
}

promptUser()
    .then(function (answers) {
        const readme = generateREADME(answers);
        return writeFileAsync("exampleREADME.md", readme);
    })
    .then(function () {
        console.log("Successfully wrote to exampleREADME.md");
    })
    .catch(function (err) {
        console.log(err);
    });
