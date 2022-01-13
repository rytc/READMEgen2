const md = require("markdown-it")();

export class ReadmeOutput {
    constructor(outputTag) {
        this.outputTag = outputTag;

        this.projectTitle = "Project Title";
        this.description = ""; 
        this.installation = "";
        this.usage = "";
        this.license = "";
        this.contributing = "";
        this.tests = "";
        this.githubURL = "";
        this.email = "";

        this.markdown = "";
    }

    update() {
        document.getElementById(this.outputTag).innerHTML = this.render();
    }

    render() {
        this.markdown = `# ${this.projectTitle}

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

`;
        return md.render(this.markdown);
    }


}