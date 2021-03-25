// function to generate markdown for README
function generateMarkdown(data) {
  let license = ""
  if(data.choice == "MIT"){
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)"
  }
  return `# ${data.title}

## My favorite game right now is:
${license}

[![Generic Badge](https://img.shields.io/badge/User-Vincent-blue.svg)](https://github.com/vinrich10)
`;

}


module.exports = generateMarkdown;
