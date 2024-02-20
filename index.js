const Questions = [
      {
        question: "what is the largest animal in the world",

         answers: [
              { text: "Blue whale", correct: true },
              { text: "Cheetah",    correct: false },
              { text: "Elephant",   correct: false },
              { text: "Giraffe",    correct: false },
         ]

      },
      {
        question: "what is the largest animal in the world",

         answers: [
              { text: "Blue whale", correct: true },
              { text: "Cheetah",    correct: false },
              { text: "Elephant",   correct: false },
              { text: "Giraffe",    correct: false },
         ]
      },
      {
        question: "what is the largest animal in the world",

         answers: [
              { text: "Blue whale", correct: true },
              { text: "Cheetah",    correct: false },
              { text: "Elephant",   correct: false },
              { text: "Giraffe",    correct: false },
         ]
      },
      {
        question: "what is the largest animal in the world",

         answers: [
              { text: "Blue whale", correct: true },
              { text: "Cheetah",    correct: false },
              { text: "Elephant",   correct: false },
              { text: "Giraffe",    correct: false },
         ]
      }
];


const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let questionsIndex = 0;
let score = 0;

function startQuiz() {
    questionsIndex = 0;
    score = 0;
    
    showQuiz();


}
 

function showQuiz() {
     resetQuiz();
    let currentQuestion = Questions[questionsIndex];
    let isQuestion  = questionsIndex + 1;
    questionElement.innerHTML = isQuestion + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let newButton = document.createElement("button");
        newButton.innerHTML = answer.text;
        newButton.classList.add("btn")
        answersButtons.appendChild(newButton);
        if (answer.correct) {
            newButton.dataset.correct = answer.correct;
        }

        newButton.addEventListener("click", selectAnswer);
    });

      
}


function showScore() {
   resetQuiz();
   questionElement.innerHTML = `you scored ${score} out of ${Questions.length}!`;
   nextButton.innerHTML = "Play Again";
   nextButton.style.display = "block";
}

function handleQuestion() {
   questionsIndex++
   if(questionsIndex < Questions.length) {
         showQuiz();
   } else {
      showScore();
   } 
}


nextButton.addEventListener("click", () => {
   if(questionsIndex < Questions.length) {
         handleQuestion();
   } else {
      startQuiz();
   }
})




function selectAnswer(e) {
      let  selectedAnswer = e.target;
      let isCorrect = selectedAnswer.dataset.correct === "true";
     if(isCorrect) {
        selectedAnswer.classList.add("correct");
        score++;
     } else {
        selectedAnswer.classList.add("incorrect");
     }

     Array.from(answersButtons.children).forEach(button => {

      if (button.dataset.correct === "true") {
         button.classList.add("correct");
      }

      button.disabled = true;

     });
     nextButton.style.display = "block";
}



function resetQuiz() {
   nextButton.style.display = "none";
   while(answersButtons.firstChild) {
         answersButtons.removeChild(answersButtons.firstChild);
   }
}


startQuiz();
