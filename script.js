const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);

// let timerID;
let animationFrameID;

setTimeout(() => {
  console.log(performance.now());
  console.log(date.now()); //# of ms since Jan 1, 1970
}, 1000);

// setInterval & setTimeout - BOTH functions of the window.
function startTimer(){
  // timerID = setInterval(()=>{
  //   count.textContent++;
  // }, 300)
  count.textContent++;
  animationFrameID = requestAnimationFrame(startTimer);
}

function stopTimer(){
  // clearInterval(animationFrameID);
  cancelAnimationFrame(animationFrameID);
}

// DATES