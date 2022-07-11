document.getElementById("stopBtn").disabled = true;
let mainInterval = null;
let redInterval = null;
let firstInterval = null;
const audio = new Audio("beep-04.mp3");

function startTimer() {
  document.getElementById("stopBtn").disabled = false;
  document.getElementById("startBtn").disabled = true;
  const activity = document.getElementById("activity").value;
  const rest = document.getElementById("rest").value;

  changeGreenToRed(activity, rest);

  const x = (Number(activity) + Number(rest)) * 1000;
  setInterval(function () {
    changeGreenToRed(activity, rest);
    audio.play();
  }, x);
}

function changeGreenToRed(activity, rest) {
  clearInterval(redInterval);
  document.body.style.backgroundColor = "green";
  document.querySelector(`h1`).textContent = `Go Go Go!!!`;

  displaySeconds(activity);
  let second = 1;
  firstInterval = setInterval(function () {
    displaySeconds(activity - second);
    if (activity - second === 1) {
      audio.play();
    }
    second++;
  }, 1000);
  // set color green for activity milliseconds
  setTimeout(function () {
    clearInterval(firstInterval);
    document.body.style.backgroundColor = "red";
    document.querySelector(`h1`).textContent = `Rest Now!`;
    displaySeconds(rest);
    let second = 1;
    redInterval = setInterval(function () {
      displaySeconds(rest - second);
      second++;
    }, 1000);
  }, Number(activity * 1000));
}

function displaySeconds(sec) {
  document.getElementById("timer").innerHTML = sec;
}

function stopTimer() {
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("startBtn").disabled = false;

  // delete Intervals
  for (var i = 1; i < 99999; i++) window.clearInterval(i);

  document.getElementById("timer").innerHTML = "";
  document.body.style.backgroundColor = "white";
  document.getElementById("activity").value = "";
  document.getElementById("activity").value = "";
  document.querySelector(`h1`).textContent = ``;
}
