
const quizForm = document.querySelector("#quizForm");
const resultText = document.querySelector('#resultText');

const answers = [
    "90°",
    "right angled",
    "one right angle",
    "a+b+c",
]

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', calculateScore)

function calculateScore() {
    let score = 0;
    let index=0;
    const formResults = new FormData(quizForm)

    for(let value of formResults.values()){
       if(value === answers[index]) {
        score++;
       }
       index++;
    }
    resultText.textContent = `Your score is ${score}`;

}