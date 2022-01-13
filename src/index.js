import "./main.scss"
import { Questioner } from "./questioner";
import { ReadmeOutput } from "./readmeOutput";


function run() {

    const questions = [
        {
            type: 'input',
            question: 'Project Name',
            onChange: (value) => {readmeOutput.projectTitle = value;}
        },
        {
            type: 'text',
            question: 'Description',
            onChange: (value) => {readmeOutput.description = value;}
        },
        {
            type: 'text',
            question: 'Installation',
            onChange: (value) => {readmeOutput.installation = value;}
        },
        {
            type: 'text',
            question: 'Usage',
            onChange: (value) => {readmeOutput.usage = value;}
        },
        {
            type: 'choice',
            question: 'license',
            onChange: (value) => {readmeOutput.license = value;}
        },
        {
            type: 'text',
            question: 'Contributing',
            onChange: (value) => {readmeOutput.contributing = value;}
        },
        {
            type: 'text',
            question: 'Tests',
            onChange: (value) => {readmeOutput.tests = value;}
        },
        {
            type: 'input',
            question: 'Github account name',
            onChange: (value) => {readmeOutput.githubURL = `https://github.com/${value}`;}
        },
        {
            type: 'input',
            question: 'Email',
            onChange: (value) => {readmeOutput.email = value;}
        },
    ]

    const readmeOutput = new ReadmeOutput('readme_output')
    Questioner(questions, (event) => {
        readmeOutput.update();
    },
    () => {
        alert("Finished!");
    });

}

run();