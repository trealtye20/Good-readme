// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {

  return `[Github](https://img.shields.io/github/license-${license}-blue.svg)`;
}
  return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {

    return `https://shields.io/category/license`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {

    return `${data.license}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

  
## Description
${data.description}

## Table of Contents (Optional)

- [Installation](#installation)


- [Usage](#usage)


- [Credits](#credits)


- [License](#license)


## Installation
${data.install}

## Usage
${data.usage}



## Contributing
${data.contributing}


## Tests
${data.tests}


## Questions
Email: ${data.email}
Github: ${data.github}


`;
}

module.exports = generateMarkdown;
