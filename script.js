const startButtonSelector = ".button__start";
const stopButtonSelector = ".button__stop";
const hoursButtonSelector = "#hours";
const minutesInputSelector = "#minutes";
const secondsInputSelector = "#seconds";

const hoursInput = document.querySelector(hoursButtonSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);
const StartBtn = document.querySelector(startButtonSelector);
const StopBtn = document.querySelector(stopButtonSelector);

let remainingTime;

let intervalID;
let hours;
let minutes;
let seconds;

setTimeout(() => {

}, )

function startTimer(event) {
    event.preventDefault();
    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);

    remainingTime = hours * 3600 + minutes * 60 + seconds;
    StartBtn.classList.add('hide');
    StopBtn.classList.remove('hide');

    intervalID = setInterval(updateTimer, 1000);
}

function updateTimer() {
    remainingTime = remainingTime -1;

    hours = Math.floor(remainingTime / 3600);
    minutes = Math.floor(remainingTime % 3600 / 60);
    seconds = remainingTime % 60;

    hoursInput.value = hours.toString().padStart(2, "0");
    minutesInput.value = minutes.toString().padStart(2, "0");
    secondsInput.value = seconds.toString().padStart(2, "0");

    if (remainingTime == 0) {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(intervalID);
    StartBtn.classList.remove('hide');
    StopBtn.classList.add('hide');
}


StartBtn.addEventListener("click", startTimer);
StopBtn.addEventListener("click", stopTimer);