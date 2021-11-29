// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe the program.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'installation name?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'What was is this used for?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who were the contributers?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Was this tested?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter email address.'
      },
      {
          type: 'input',
          name: 'github',
          message: 'Enter github name.'
      }
    ]);
  };


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
  



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => fs.writeFileSync('EX.README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
