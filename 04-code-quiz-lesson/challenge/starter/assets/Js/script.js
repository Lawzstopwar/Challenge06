let choiceE1 = document.querySelector("#choice")
let questions = [{question:"What is the square root of 169", answers:["ex1", "ex2", "ex3", "ex4",], correctAnswer: 1},
{question: " What is measured in Pascals?", answer:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2}
]

let currentQuestion = 0;




document.querySelector("#question-title").textContent = questions[0].question


console.log(questions[0].answers[0])
console.log(questions[0].answers[1])
console.log(questions[0].answers[2])
console.log(questions[0].answers[3])




choiceE1.addEventListener ("click"), function(event){

if(event.target.matches("button")){
    console.log(event.target.getAttribute("data-index"))
}

}