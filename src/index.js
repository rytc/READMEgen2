import "./main.scss"
import { ReadmeOutput } from "./readmeOutput";

const readmeOutput = new ReadmeOutput()

function updateReadmeOutput() {
    document.getElementById('readme_output').innerHTML = readmeOutput.render();
}

document.getElementById("test_input").addEventListener('input', (event) => {
    readmeOutput.description = event.target.value;
    updateReadmeOutput();
})

updateReadmeOutput();