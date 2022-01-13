import "./main.scss"
import { Questioner } from "./questioner";
import { ReadmeOutput } from "./readmeOutput";
import axios from "axios";

const md = require("markdown-it")();

document.getElementById("toggle_mode").addEventListener('click', (event) => {
    if(event.target.innerHTML == "Light Mode") {
        let body = document.querySelector('body');
        body.className = "light";
        event.target.className = "btn btn-dark";
        event.target.innerHTML = "Dark Mode";
    } else {
        let body = document.querySelector('body');
        body.className = "dark";
        event.target.className = "btn btn-light";
        event.target.innerHTML = "Light Mode";
    }
});

async function run() {

    let licenses = [];

    try {

        let res = await axios.get('https://api.github.com/licenses');
        let licenseList = res.data;
        console.log(licenseList);
        // Add the licenses to the question choice array
        for(let i = 0; i < licenseList.length; i++) {
            licenses.push(licenseList[i].spdx_id);
        }

    } catch(err) {
        let alert = document.getElementById("alert");
        alert.style.display = "";
        alert.innerHTML = `Failed to fetch licenses from Github. ${err}`;
    }
    
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
            choices: licenses,
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
    readmeOutput.update();

    Questioner(questions, (event) => {
        readmeOutput.update();
    },
    () => {
    
        let targetDiv = document.getElementById("question_col");
        
        let title = document.createElement("h4");
        title.innerHTML = "Done! Make any final changes below.";
        title.className = "m-2";
        let downloadBtn = document.createElement("button");
        downloadBtn.className = "btn btn-primary m-2";
        downloadBtn.innerHTML = "Download README.md";
        downloadBtn.addEventListener("click", (event) => {
            event.preventDefault();
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
            encodeURIComponent(document.getElementById("final_markdown").value));
            element.setAttribute('download', "README.md");

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        })

        let editor = document.createElement('textarea');
        editor.id = "final_markdown";
        editor.cols = 50;
        editor.rows = 30;
        editor.style.fontFamily = "monospace";
        editor.textContent = readmeOutput.markdown;
        editor.addEventListener('input', (event) => {
            document.getElementById('readme_output').innerHTML = md.render(event.target.innerHTML);
        });

        targetDiv.append(title);
        targetDiv.append(editor);
        targetDiv.append(downloadBtn);
        
    });

}

run();