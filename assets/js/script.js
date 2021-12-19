
//this is the timer section.  Set Starting minues as the timer start point
const startingMinutes = .1;
let time = startingMinutes * 60;

const timerEl = document.getElementById('timer');

setInterval(updateCowndown, 1000);
function updateCowndown() {

    const minutes = Math.floor(time / 60)

    var seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds;

  timerEl.innerHTML = `${minutes}:${seconds}`;
  

}