let display = document.getElementById("calculatorDisplay");

function addToDisplay(value) {
    display.value += value;
}

function reset() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function starHehe() {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=eRhlxJH3IMl1JVDD";
}