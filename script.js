// Set target date to 1st May 2025
const targetDate = new Date("May 1, 2025 00:00:00").getTime();

// countdown
let timer = setInterval(function() {
  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = targetDate - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>days</div> \
    <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \
    <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \
    <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div>";
}, 1000);
