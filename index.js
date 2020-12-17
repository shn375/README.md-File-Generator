var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
            {
                type: "input",
                name: "projectTitle",
                message: "What is the project title?",
            },
            {
                type: "input",
                name: "description",
                message: "Write a brief description of your project: "
            },
            {   
                type: "checkbox",
                name: "technology",
                message: "Chose the technology used for this project: ",
                choices: [
                    "HTML",
                    "CSS",
                    "JAVASCRIPT",
                    "NODE.js",
                    "PYTHON",
                    "RUBY",
                    "Open"
                ]
            },
            {
                type: "input",
                name: "installation",
                message: "Describe the installation process if any: ",
            },
            {
                type: "input",
                name: "usage",
                message: "What is this project usage?"
            },
            {
                type: "checkbox",
                name: "license",
                message: "Chose the license for this project: ",
                choices: [
                    "MIT",
                    "Apache",
                    "GNU",
                    "BSD",
                    "Mozilla",
                    "Open"
                ]
            },
            {
                type: "input",
                name: "contribution",
                message: "Who are the contributors of this projects?"
            },
            {
                type: "input",
                name: "test",
                message: "Is there a test included?"
            },
            {
                type: "input",
                name: "questions",
                message: "What do I do if I have an issue? "
            },
            {
                type: "input",
                name: "username",
                message: "Please enter your GitHub username: "
            },
            {
                type: "input",
                name: "email",
                message: "Please enter your email: "
            }
    ];

// function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, generateMarkdown(response), (err) =>
  err ? console.error(err) : console.log('Success!')
    

);



}


// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
        writeToFile('README.md', response)
    );

}

// function call to initialize program
init();


