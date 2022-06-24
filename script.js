const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);

// let timerID;
let animationFrameID;

setTimeout(() => {
  // console.log(performance.now());
  // console.log(date.now()); //# of ms since Jan 1, 1970
}, 1000);

// setInterval & setTimeout - BOTH functions of the window.
function startTimer(){
  // timerID = setInterval(()=>{
  //   count.textContent++;
  // }, 300)
  // count.textContent++;
  // animationFrameID = requestAnimationFrame(startTimer);
}

function stopTimer(){
  // clearInterval(animationFrameID);
  // cancelAnimationFrame(animationFrameID);
}

// DATES
const d = new Date();
// (year, month, day, hours, minutes, seconds, milliseconds);
// (year, month, day, hours, minutes, seconds)
// (year, month, day, hours, minutes)
// (year, month, day, hours)
// (year, month, day)
// (year, month)
// (milliseconds)

// JavaScript counts months from 0 to 11
// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

// DATE METHODS
// console.log(d.toString()); // Longest
// console.log(d.toUTCString()); // Long
// console.log(d.toDateString()); // Short
// console.log(d.toISOString()); // International

// GET
// console.log(d.getFullYear()); // Year as a four digit number (YYYY)
// console.log(d.getMonth()); // Months 0 - 11
// console.log(d.getDate()); // Numbers 1 - 31
// console.log(d.getHours()); // Hours: 0 - 23 Hrs
// console.log(d.getMinutes()); // Minutes: 0 - 59
// console.log(d.getSeconds()); // Seconds: 0 - 59
// console.log(d.getMilliseconds()); // Miliseconds: 0 - 999
// console.log(d.getTime()); //Gets time since Jan 1, 1970
// console.log(d.getDay()); // Get's weekday as a number.
// console.log(Date.now()); // ES5, get time.

// SET
// console.log(d.setFullYear()); // (YYYY)
// console.log(d.setDate()); // 1 - 31
// console.log(d.setMonth()); // 0 - 11
// console.log(d.setHours()); // 0 - 23 Hrs
// console.log(d.setMinutes()); // 0 - 59
// console.log(d.setSeconds()); // 0 - 59
// console.log(d.setMilliseconds()); // 0 - 999
// console.log(d.setTime()); 