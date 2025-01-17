// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const shieldsSite = `https://img.shields.io/badge/`;
  const licenseLink = renderLicenseLink(license);
  switch(license) {
    case "Apache 2.0":
      return `[![License](${shieldsSite}License-Apache_2.0-blue.svg)](${licenseLink})`;
    case "ISC":
      return `[![License: ISC](${shieldsSite}License-ISC-blue.svg)](${licenseLink})`;
    case "MIT":
      return `[![License: MIT](${shieldsSite}License-MIT-yellow.svg)](${licenseLink})`;
    case "none":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const opensourceSite = `https://opensource.org/licenses/`;
  switch(license) {
    case "Apache 2.0":
      return `${opensourceSite}Apache-2.0`;
    case "ISC":
      return `${opensourceSite}ISC`;
    case "MIT":
      return `${opensourceSite}MIT`;
    case "none":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  }
  else {
    return `This application is covered under the [${license}](${renderLicenseLink(license)}) license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description:
${data.description}

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation:

## Usage:

## License:
${renderLicenseSection(data.license)}

## Contributing:

## Tests:

## Questions:
Contact me via github: [${data.githubUser}](https://github.com/${data.githubUser})  
Or email me at: <${data.email}>
`;
}

export default generateMarkdown;
