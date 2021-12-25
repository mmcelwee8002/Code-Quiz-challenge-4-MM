
//this is the timer section.  Set Starting minues as the timer start point
var startingMinutes =(2);
let time = startingMinutes * 60;

var x = startingMinutes 

const timerEl = document.getElementById('timer');

// document.getElementById('timer').innerHTML = x

function timer(){
setInterval(updateCountdown, 1000);

}

document.getElementById('start-btn').addEventListener('click', timer)

function updateCountdown () {
      var minutes = Math.floor(time / 60)

    var seconds = time % 60

  
    // this if statement stops the clock at zero 0
    if (time <= -1) { //added this, checks if time <= -1 and updates variables
        time = 0;
        minutes = 0;
        seconds = 0;
    }
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    console.log('timer')
}




var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")

var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question')
var answerButtonEl = document.getElementById ('answer-buttons')
var shuffledQuestions, currentQuestionIndex;



startButton.addEventListener('click', startQuiz)
nextButton.addEventListener ('click' , () => {
  currentQuestionIndex++
  setNextQuestion()

})
function startQuiz (){

startButton.classList.add('hide');
shuffledQuestions = questions.sort() 
currentQuestionIndex = 0
questionContainerEl.classList.remove('hide')
setNextQuestion()
}



function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question){
  questionEl.innerText = question.question
question.answer.forEach(answer => {
  var button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')

  if (answer.correct ){
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerButtonEl.appendChild(button)
})
}

function resetState(){
  nextButton.classList.add('hide')
  while (answerButtonEl.firstChild){
    answerButtonEl.removeChild
    (answerButtonEl.firstChild)

  }
}


function selectAnswer(e){
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)

  Array.from(answerButtonEl.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
  startButton.innerText = 'Next Question'
  startButton.classList.remove('hide')

}
}



function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct){
    element.classList.add('correct')
   } else {
      element.classList.add('wrong')

    }
  }
  
  function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

//Need a function to end the quiz




// questions Objects
var questions= [
  {
  question:  "What is the name of Minnesota's Football team?",
  answer: [
    {text: 'Vikings', correct: true},
    {text: 'Twins', correct: false},
    {text: 'Wild', correct: false},
    {text: 'Timberwolves', correct: false}
  ]
  } ,

  {
    question:  "Who was the star of the Matrix?",
    answer: [
      {text: 'Keanu Reaves', correct: true},
      {text: 'Harrison Ford', correct: false},
      {text: 'Jessica Wickson', correct: false},
      {text: 'Bobbie Feldman', correct: false}
    ]
    } ,
    {
      question:  "Which team won the first Super Bowl?",
      answer: [
        {text: 'Kansas City Chiefs', correct: false},
        {text: 'Green Bay Packers', correct: true},
        {text: 'Dallas Cowboys', correct: false},
        {text: 'Oakland Raiders', correct: false}
      ]
      } ,
      {
        question:  "How many Super Bowls has Tom Brady won?",
        answer: [
          {text: '3', correct: false},
          {text: '5', correct: false},
          {text: '7', correct: true},
          {text: '9', correct: false}
        ]
        } ,
        {
          question:  "What City has hosted the most Super Bowls?",
          answer: [
            {text: 'Los Angeles', correct: false},
            {text: 'Tampa', correct: false},
            {text: 'New Orleans', correct: false},
            {text: 'Miami', correct: true}
          ]
          },
          {
            question:  "Where is the 2021 Super Bowl?",
            answer: [
              {text: 'Los Angeles', correct: true},
              {text: 'Tampa', correct: false},
              {text: 'New Orleans', correct: false},
              {text: 'Miami', correct: false}
            ]
            } ,
            {
              question:  "Which Team won the 2021 NBA Championship",
              answer: [
                {text: 'Los Angeles Lakers', correct: false},
                {text: 'Golden State Warriors', correct: false},
                {text: 'San Antonio Spurs', correct: false},
                {text: 'Milwaukee Bucks', correct: true}
              ]
              }   
  



]
