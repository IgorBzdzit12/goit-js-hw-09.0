function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = null;

startButton.addEventListener('click', () => {
    startButton.disabled = true; // Dezaktywuj przycisk "Start"
    stopButton.disabled = false;  // Aktywuj przycisk "Stop"

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId); // Zatrzymaj zmianę kolorów
    startButton.disabled = false; // Aktywuj przycisk "Start"
    stopButton.disabled = true;   // Dezaktywuj przycisk "Stop"
});
