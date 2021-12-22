
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

// questions Objects
var questions= 
[
{
question:  "What is the name of Minnesota's Football team?",
answer: "Vikings",
button1: "Twins",
button2: "Wild",
button3: "Vikings",
button4: "Timberwolves",
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

var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var questionEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li0 = document.createElement("ul")


// Add text for list items
li0.textContent = questions[0].question;
li1.textContent = questions[0].button1;
li2.textContent = questions[0].button2;
li3.textContent = questions[0].button3;
li4.textContent = questions[0].button4;


body.appendChild(h1El)
body.appendChild(questionEl);
questionEl.appendChild(listEl);
// Append ordered list 
questionEl.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li0);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Add styling to list element
// h1El.setAttribute("class", "question-hero-h1");
listEl.setAttribute("class", "question-hero");
// Add styling to list items
li0.setAttribute("class", "question-title");
li1.setAttribute("class" , "button" );
li2.setAttribute("class" , "button" );
li3.setAttribute("class" , "button" );
li4.setAttribute("class" , "button" );
