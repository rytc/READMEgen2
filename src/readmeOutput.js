const md = require("markdown-it")();

export class ReadmeOutput {
    constructor() {
        this.projectTitle = "Project Title";
        this.description = ""; 
        this.installation = "";
        this.usage = "";
        this.license = "";
        this.contributing = "";
        this.tests = "";
        this.githubURL = "";
        this.email = "";
    }

    render() {
        return md.render(`

# ${this.projectTitle}

## Description
${this.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Test-Instructions)
- [Questions](#Questions)

## Installation
${this.installation}

## Usage
${this.usage}

## License
This project is covered under the ${this.license}

## Contributing
${this.contributing}

## Tests
${this.tests}

## Questions
- GitHub: [${this.githubURL}](${this.githubURL})
- Email: [${this.email}](${this.email})

`);
    }


}