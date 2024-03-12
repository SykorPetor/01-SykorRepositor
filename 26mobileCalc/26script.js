let usernames = ["kos", "nohr"]
let passwords = ["kos1", "nohr1"]

function log() {
    let index
    let logU = window.prompt("input username");

    if(logU !== "") {
        for (let i = 0; i <= usernames.length; i++) {
            if (logU == usernames[i]) {
                index = i;
                break;
            }
        }
    } else {
        alert("zadej něco")
        log()
    }

    let logP = window.prompt("input password");
    if (logP == passwords[index]) {
        alert("přihlášen!")
    } else {
        alert("zadáno špatné heslo");
        log()
    }
}

log()

let display = document.getElementById("display");

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