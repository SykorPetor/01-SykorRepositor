let abc = "abcdefghijklmnopqrstuvwxyz";
let nums = "1234567890";
let signs = ".-_!*-+,";
let newPass = "";

function passwordGen() {
    let passLenWan = document.getElementById("passLen").value
    if (passLenWan == "" || passLenWan == " ") {
        passLenWan = 8;
    }
    let ranIk;
    newPass = ""

    for (let i = 0; i < passLenWan; i++) {
        ranIk = Math.floor(Math.random() * 4)
        if (ranIk == 0) {
            newPass += abc[Math.floor(Math.random() * abc.length)]
        } else if (ranIk == 1) {
            newPass += abc[Math.floor(Math.random() * abc.length)].toUpperCase()
        } else if (ranIk == 2) {
            newPass += nums[Math.floor(Math.random() * nums.length)]
        } else {
            newPass += signs[Math.floor(Math.random() * signs.length)]
        }
    }
    document.getElementById("output").innerHTML = newPass
}

function savePassword() {
    let pass = document.getElementById("passFor").value
    let user = document.getElementById("namFor").value
    localStorage.setItem(user, pass);
    console.log(`uloženo heslo ${pass} pro jméno ${user}`);
}

function see() {
    let what = window.prompt("Helso pro jaké jméno?")
    document.getElementById("seePass").innerHTML = (`Jméno: ${what}, Heslo: ${localStorage.getItem(what)}`)
}

function clearo() {
    let odpo = window.prompt("Vymazat všechny informace? (Y/N)");

    if (odpo == "Y") {
        localStorage.clear()
    }
}