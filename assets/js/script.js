
//this is the timer section.  Set Starting minues as the timer start point
const startingMinutes = .1;
let time = startingMinutes * 60;

const timerEl = document.getElementById('timer');

setInterval(updateCowndown, 1000);

function updateCowndown() {

    const minutes = Math.floor(time / 60)

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

// Create a new task
formEl.addEventListener("submit", taskFormHandler);