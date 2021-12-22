
//this is the timer section.  Set Starting minues as the timer start point
const startingMinutes = .0;
let time = startingMinutes * 60;

const timerEl = document.getElementById('timer');

setInterval(updateCowndown, 1000);

function updateCowndown() {

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
}

//question #1
var questions= 
[
{
question:  "what is...?",
answer: "the answer is...",
button1: "the answer is...",
button2: "Hi Jordan",
button3: "button 3",
button4: "button 4",
},
{
  question:  "what is...?",
  answer: "the answer is...",
  button1: "the answer is...",
  button2: "button 2",
  button3: "button 3",
  button4: "button 4",
  }
]

document.getElementById("questions").innerHTML =
questions[0].answer;

document.getElementById("questions").innerHTML = 
questions[0].button1;

// questions[0].question1

console.log(Object.keys(questions));




// Create click event for answer
// function answerQuestion (){

    function questionCorrect() {
        document.getElementById("answerResponse").innerHTML = "Correct";
    }
    function questionWrong() {
        document.getElementById("answerResponse1").innerHTML = "Wrong";
    }



//question #1 object...    questions[0].question
var questions= 
[
{
question:  "what is...?",
answer: "the answer is...",
button1: "the answer is...",
button2: "button 2",
button3: "button 3",
button4: "button 4",
},
{
  question:  "what is...?",
  answer: "the answer is...",
  button1: "the answer is...",
  button2: "button 2",
  button3: "button 3",
  button4: "button 4",
  }



]
questions[0].question





//    document.getElementById("button1").addEventListener("click", function (){
//         alert("did this work?")
//         });

// document.getElementById("button2").addEventListener("click", function (){
//     alert("did this work?")
//     });
// document.getElementById("button3").addEventListener("click", function (){
//         alert("did this work?")
//         });
// document.getElementById("button4").addEventListener("click", function (){
//     alert("did this work?")
//             });    
            


