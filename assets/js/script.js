
//this is the timer section.  Set Starting minues as the timer start point
// const startingMinutes = .0;
// let time = startingMinutes * 60;

// const timerEl = document.getElementById('timer');

// setInterval(updateCowndown, 1000);

// function updateCowndown() {

//     var minutes = Math.floor(time / 60)

//     var seconds = time % 60
    // this if statement stops the clock at zero 0
    // if (time <= -1) { //added this, checks if time <= -1 and updates variables
    //     time = 0;
    //     minutes = 0;
    //     seconds = 0;
//     }
//     seconds = seconds < 10 ? '0' + seconds : seconds;
//     timerEl.innerHTML = `${minutes}:${seconds}`;
//     time--;
// }

var startButton = document.getElementById("start-btn")
var questionContainerEl = document.getElementById('question-container');
var shuffledQuestions, currentQuestionIndex;



startButton.addEventListener('click', startQuiz)

function startQuiz (){
console.log('started')
startButton.classList.add('hide');
questionContainerEl.classList.remove('hide')
setNextQuestion()
}



function setNextQuestion(){

}

function selectAnswer(){


}

// questions Objects
var questions= [
  {
  question:  "What is the name of Minnesota's Football team?",
  answer: [
    {text: 'Vikings', correct: true},
    {text: 'Twins', correct: false}
  ]
  }  
]
  