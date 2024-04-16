let input = document.getElementById("inputPoz");

let poz0 = ["", false]
let poz1 = ["", false]
let poz2 = ["", false]
let poz3 = ["", false]
let poz4 = ["", false]
let poz5 = ["", false]
let poz6 = ["", false]
let poz7 = ["", false]
let poz8 = ["", false]
let poz9 = ["", false]

let pozs = [poz0, poz1, poz2, poz3, poz4, poz5, poz6, poz7, poz8, poz9]
let pozns = []

let x = 0
let y = 1

function add() {
    let newPoznámka = input.value;
    for(let i = 0; i < 9; i++) {
        if (pozs[x, y] == false) {
            pozs[x, y] = newPoznámka;
            pozs[x, y] = true;
        } else{
            x++
        }
    }
}