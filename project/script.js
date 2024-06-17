function generateScramble() {
    let notationLetters = ["L", "R", "U", "D", "F", "B", "L"];
    const scrambleOutput = document.getElementById("scrambleOutput");
    scrambleOutput.innerHTML = ""
    let letter = ""
    let previousLetter = ""
    let index = 0
    let add = 0

    for (let i = 0; i <= 15; i++) {
        add = Math.floor(Math.random() * 5);
        index = Math.floor(Math.random() * 6);
        letter = notationLetters[index];

        if (add == 1 || add == 2) {
            if (previousLetter == letter) {
                scrambleOutput.innerHTML += notationLetters[index + 1]
            } else {
                scrambleOutput.innerHTML += letter;
            }
        } else if (add == 3) {
            if (previousLetter == letter) {
                scrambleOutput.innerHTML += notationLetters[index + 1] + "'"
            } else {
                scrambleOutput.innerHTML += letter + "'"
            }
        } else {
            if (previousLetter == letter) {
                scrambleOutput.innerHTML += notationLetters[index + 1] + "2"
            } else {
                scrambleOutput.innerHTML += letter + "2"
            }
        }

        previousLetter = letter
        scrambleOutput.innerHTML += " "
    }
}

let showing = false

function otherF() {
    if (showing == false) {
        showOther()
        showing = true
    } else {
        hideOther()
        showing = false
    }
}

function hideOther() {
    document.getElementById("otherBtn").innerText = "show rest"
    other.style.display = "none";
    notOther.style.height = "90vh";
}

function showOther() {
    document.getElementById("otherBtn").innerText = "hide rest"
    other.style.display = "block";
    notOther.style.height = "auto";
}


let mili = 0;
let timerRun = false;

function timer() {
    const other = document.getElementById("other")
    const notOther = document.getElementById("notOther")
    if (timerRun == false) {
        startTimer()
        hideOther()
    } else {
        stopTimer()
    }
}

function startTimer() {
    mili = 0
    timerInterval = setInterval(showTimer, 10);
    document.getElementById("timerButton").innerText = "Stop Timer"
    timerRun = true
}

function stopTimer() {
    clearInterval(timerInterval)
    document.getElementById("timerButton").innerText = "Start Timer"
    timerRun = false
}

let forSave = ""
function showTimer() {
    mili++
    let sekundy = Math.floor((mili / 100) % 60)
    let minuty = Math.floor(mili / 6000)
    document.getElementById("time").innerHTML = minuty + ":" + sekundy + ":" + Math.floor(mili % 100);
    forSave = String(minuty + ":" + sekundy + ":" + Math.floor(mili % 100));
}

document.addEventListener('keydown', function (event) {
    if (event.key === ' ' || event.code === 'Space') {
        timer();
    }
});




// LOCAL STORAGE JFJDHKHIGUA

function saveSolve() {
    const solveTime = forSave
    const now = new Date()
    const solveDate = `${now.getDate()}.${now.getMonth() + 1} ${now.getHours()}:${now.getMinutes()}`;
    const solve = { solveTime, solveDate };

    let solves = JSON.parse(localStorage.getItem('solves')) || [];
    solves.push(solve);
    localStorage.setItem('solves', JSON.stringify(solves));

    renderSolves();
}

function renderSolves() {
    const solves = JSON.parse(localStorage.getItem('solves')) || [];
    const savedSolvesElement = document.getElementById('savedSolves');
    savedSolvesElement.innerHTML = '';

    solves.forEach((item, index) => {
        const solveDiv = document.createElement('div');
        solveDiv.className = 'solve-container';

        const solveText = document.createElement('div');
        solveText.innerHTML = `
        <div class="solveInside">
        <p>${item.solveDate}</p>
        <p>${item.solveTime}</p>
        <button class="deleteBtn" onclick="deleteSolve(${index})">Delete</button>
        </div>
        `;

        solveDiv.appendChild(solveText);

        savedSolvesElement.appendChild(solveDiv);
    });
}

function deleteSolve(index) {
    let solves = JSON.parse(localStorage.getItem('solves')) || [];
    solves.splice(index, 1);
    localStorage.setItem('solves', JSON.stringify(solves));
    renderSolves();
}

renderSolves()