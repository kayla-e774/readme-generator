// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'editor',
        name: 'description',
        message: "Enter a project description:"
    },
    {
        type: 'editor',
        name: 'installation',
        message: "Enter installation instructions:"
    },
    {
        type: 'editor',
        name: 'usage',
        message: "Enter usage information:"
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose your license type:",
        choices: ["Apache 2.0", "ISC", "MIT", "none"]
    },
    {
        type: 'editor',
        name: 'contributing',
        message: "Enter contribution guidelines:"
    },
    {
        type: 'editor',
        name: 'tests',
        message: "Enter test instructions:"
    },
    {
        type: 'input',
        name: 'githubUser',
        message: "Enter your github username:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email address:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownString = generateMarkdown(data);
    fs.writeFile(fileName, markdownString, (err) =>
        err ? console.error(err) : console.log(`Successfully generated "${fileName}".`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("./dist/README.md", answers);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();