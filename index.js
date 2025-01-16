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
            console.log(JSON.stringify(answers));
            // console.log(generateMarkdown(answers));
            writeToFile("./dist/README.md", answers);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();