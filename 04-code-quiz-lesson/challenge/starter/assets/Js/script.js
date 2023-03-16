let choiceE1 = document.querySelector("#choices")
let questions = [
    {
        question: "What type of variable is visible only within a function where it is defined?",
        answers: [
            ("Local Variable"),
            ("Non Local Variable"),
            ("Global Variable"),
            ("None of the above"),],
        correctAnswer: "Local Variable"
    },
    {
        question: " Which function of Array object is able to call a function for each element in the array?",
        answers: [
            ("filter()"),
            ("forEach()"),
            ("every()"),
            ("concat()")],
        correctAnswer: "forEach()"
    },
    { 
        question: " Which function of Boolean is able object returns a string containing the source of the Boolean object?", 
        answers: [
            ("toString()"), 
            ("toSource"), 
            ("valueOf"), 
            ("none of the above")], 
        correctAnswer: "toSource" 
    },
    { 
        question: " Can you pass a anonymous function as an argument to another function?", 
        answers: [
            ("true"), 
            ("false"), 
            ("nor true or false"),
            ("all of the above")], 
        correctAnswer: "true"
    },
    { 
        question: " Which function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?", 
        answers: [
            ("push()"), 
            ("some()"), 
            ("content()"), 
            ("concat()")], 
        correctAnswer: "concat()" 
    }
]




let currentQuestion = 0;


function goToNext() {
    currentQuestion++;
    changeQuestion()
    
}

function changeQuestion () {
     // change to first questions
     document.querySelector("#question-title").textContent = questions[currentQuestion].question;

     // populate choices
     for(i = 0; i < 4; i++) {
         var newBtn = document.createElement("button");
         newBtn.textContent = questions[currentQuestion].answers[i];
        newBtn.addEventListener("click", goToNext)
         document.querySelector("#choices").append(newBtn)
     }
}


document.querySelector("#start").addEventListener("click", function () {
    // hide the start screen
    document.querySelector("#start-screen").classList.add("hide");

    changeQuestion()
})

document.querySelector(".quit").addEventListener("click", function(){
    console.log("Exit Button pressed")
})


document.querySelector(".refresh").addEventListener("click", function(){
     console.log("Refresh Button pressed")

})







// console.log(questions[0].answers[0])
// console.log(questions[0].answers[1])
// console.log(questions[0].answers[2])
// console.log(questions[0].answers[3])




// choiceE1.addEventListener("click"), function (event) {

//     if (event.target.matches("button")) {
//         console.log(event.target.getAttribute("data-index"))
//     }

// }