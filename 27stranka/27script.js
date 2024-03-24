let usernames = ["adam", "kos", "honha", "kystian", "mich"];
let passwords = ["cern", "nohr", "trav", "idk", "atheista"];

let registered = false
function register() {
    if (registered == true) {
        alert("that is your username");
    } else {
        let pass = ""
        let confirmPass = ""
        let user = ""
        let numbers = ["1, 2, 3, 4, 5, 6, 7, 8, 9"];

        user = window.prompt("input username, must contain at least 5 symbols");
        for (let x = 0; x < 1;) {
            if (user.length < 5) {
                user = window.prompt("username is too short");
            } else if (user.length > 15) {
                user = window.prompt("username is too long");
            } else {
                break;
            }
        }

        pass = window.prompt("input password, must contain at least 1 number, ")
        for (let i = 0; i < pass.length; i++) {
            for (let j = 0; i < numbers.length; j++) {
                if (pass[i] == numbers[j]) {
                    numberCount += 1;
                    break;
                }
            }
        }

        if (numberCount >= 1) {
            document.getElementById("register").innerText = user
            document.getElementById("signIn").innerText = "signed in"
            registered = true
            signed = true
        } else {
            alert("must contain at least one number, do it all again");
            register()
        }

        confirmPass = window.prompt("confirm your password");
        if (pass == confirmPass) {
            alert("your done");
        } else {
            alert("paswords not matching, do it all again")
            register()
        }
    }
}

let signed = false;
function signIn() {
    if (signed == false) {
        let index
        let logU = window.prompt("input username");

        if (logU !== "") {
            for (let i = 0; i <= usernames.length; i++) {
                if (logU == usernames[i]) {
                    index = i;
                    break;
                }
            }
        } else {
            alert("zadej něco")
            signIn()
        }

        let logP = window.prompt("input password");
        if (logP == passwords[index]) {
            alert("přihlášen!")
        } else {
            alert("zadáno špatné heslo");
            log()
        }
        document.getElementById("register").innerText = logU
        document.getElementById("signIn").innerText = "signed in"
        registered = true
        signed = true
    } else {
        alert("you are signed in!")
    }
}



let dork = false
function darkMode() {
    if (dork == false) {
        document.getElementById("body").style.backgroundColor = "black"
        document.getElementById("body").style.color = "white"
        document.getElementById("dButton").style.backgroundColor = "white"
        document.getElementById("dButton").style.color = "black"
        document.getElementById("register").style.backgroundColor = "white"
        document.getElementById("register").style.color = "black"
        document.getElementById("signIn").style.backgroundColor = "white"
        document.getElementById("signIn").style.color = "black"
        document.getElementById("card1").style.boxShadow = "1vh 1vh 1vh 1vh #41658A"
        document.getElementById("card2").style.boxShadow = "1vh 1vh 1vh 1vh #41658A"
        document.getElementById("nav").style.backgroundColor = "#41658A"
        document.getElementById("dButton").innerText = "darkmode: on"
        dork = true
    } else {
        document.getElementById("body").style.backgroundColor = "white"
        document.getElementById("body").style.color = "black"
        document.getElementById("dButton").style.backgroundColor = "black"
        document.getElementById("dButton").style.color = "white"
        document.getElementById("register").style.backgroundColor = "black"
        document.getElementById("register").style.color = "white"
        document.getElementById("signIn").style.backgroundColor = "black"
        document.getElementById("signIn").style.color = "white"
        document.getElementById("card1").style.boxShadow = "1vh 1vh 1vh 1vh #999999"
        document.getElementById("card2").style.boxShadow = "1vh 1vh 1vh 1vh #999999"
        document.getElementById("dButton").innerText = "darkmode: off"
        dork = false
    }
}