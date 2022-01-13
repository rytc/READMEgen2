const md = require("markdown-it")();

const badges = {
  "": "",
  "agpl-3.0":     "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  "apache-2.0":   "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "bsd-2-clause": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "bsd-3-clause": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "bsl-1.0":      "[![License](https://img.shields.io/badge/License-BSL%201.0-green)](https://opensource.org/licenses/BSL-1.0)",
  "cc0-1.0":      "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
  "epl-2.0":      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  "gpl-2.0":      "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "gpl-3.0":      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "lgpl-2.1":     "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  "mit":          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "mpl-2.0":      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "unlicense":    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
}

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

${badges[this.license.toLowerCase()]}

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