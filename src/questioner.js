
class QuestionerHandler {
    constructor(questions, onChange, onDone) {
        this.questions = questions;
        this.qIndex = 0;
        this.readmeOutput = this.readmeOutput;
        this.onChangeCallback = onChange;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDone = onDone;
        this.renderQuestion();
    }

    getQuestionId() {
        let name = this.questions[this.qIndex].question;
        return  name.toLowerCase().replace(' ', '-');
    }

    onChange(event) {
        let q = this.questions[this.qIndex];
        let value = document.getElementById(this.getQuestionId()).value;
        q.onChange(value);
        this.onChangeCallback(event);
    }

    onSubmit(event) {
        event.preventDefault();
        let q = this.questions[this.qIndex];
        let value = document.getElementById(this.getQuestionId()).value;
        q.onChange(value)
        this.qIndex++;
        document.getElementById("question_col").innerHTML = "";
        if(this.qIndex >= this.questions.length) {
            this.onDone();
        } else {
            this.renderQuestion();
        }
    }

    renderQuestion() {
        let q = this.questions[this.qIndex];
        let baseDiv = document.createElement('div');
        let title = document.createElement('h3');
        title.innerHTML = q.question;
        let btn = document.createElement('button');
        btn.innerHTML = "Next";
        btn.className = 'btn btn-primary';
        btn.addEventListener('click', this.onSubmit)

        let form = null;

        if(q.type === 'input') {
            form = document.createElement('input');
            form.type = "text";
        } else if(q.type === 'text') {
            form = document.createElement('textarea');
            form.cols = 45;
            form.rows = 5;
        } else if(q.type === 'choice') {
            form = document.createElement('select');
            let choice = document.createElement('option');
            choice.value = 'MIT';
            choice.name = "MIT";
            form.append(choice);
        }

        if(form) {
            form.id = this.getQuestionId();
            form.addEventListener('input', this.onChange);
            baseDiv.append(title);
            baseDiv.append(form);
            baseDiv.append(document.createElement('br'));
            baseDiv.append(btn);
            document.getElementById("question_col").append(baseDiv);

        } else {
            console.error("Invalid question type");
            console.error(q);
        }

    }
}

export const Questioner = (questions, onChange, onDone) => new QuestionerHandler(questions, onChange, onDone);