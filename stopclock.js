let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    timeDisplay.textContent = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

// Start button event listener
startButton.addEventListener('click', function() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        startButton.textContent = 'Resume';
        pauseButton.disabled = false;
        isRunning = true;
    }
});

// Pause button event listener
pauseButton.addEventListener('click', function() {
    clearInterval(timer);
    startButton.disabled = false;
    startButton.textContent = 'Resume';
    pauseButton.disabled = true;
    isRunning = false;
});

// Reset button event listener
resetButton.addEventListener('click', function() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = formatTime(hours, minutes, seconds);
    startButton.disabled = false;
    startButton.textContent = 'Start';
    pauseButton.disabled = true;
    isRunning = false;
});