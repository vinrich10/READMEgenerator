const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const util = require("util");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?"
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How will this application be used?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Who contributed to this project?"
    },
    {
        type: "List",
        name: "License",
        message: "Which license is being used?"
        choices: [
            "MIT",
            "ISC",
            "IPA",
        ]
    },
    {
        type: "input",
        name: "Tests",
        message: "What commands are needed to test this application? "
    },
    {
        type: "input",
        name: "Username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?"
    },


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(res => {
            writeToFile("README.md", generateMarkdown(res))
        })
}

// function call to initialize program
init();
