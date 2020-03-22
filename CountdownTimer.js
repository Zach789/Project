// Get an input for the deadline
let deadline = new Date("jan 01, 2021 00:00:00").getTime();

let update = setInterval(displayTime, 1000);

// Code to display time
function displayTime()
{
  // Get the days, hours, minutes and seconds
  let now = new Date().getTime();
  let t = deadline - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  // Display the time onto the div element
  let time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  let timer = document.getElementById('timer');
  timer.innerHTML = time;
}

if (displayTime == 0)
{
  clearInterval(update);
}
