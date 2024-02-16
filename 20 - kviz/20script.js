function done() {
    document.getElementById("res").innerHTML = ""
    console.clear()
    document.getElementById("1h3a").innerHTML = ""
    document.getElementById("1h3b").innerHTML = ""
    document.getElementById("2h3a").innerHTML = ""
    document.getElementById("2h3b").innerHTML = ""
    document.getElementById("3h3a").innerHTML = ""
    document.getElementById("3h3b").innerHTML = ""
    document.getElementById("4h3a").innerHTML = ""
    document.getElementById("4h3b").innerHTML = ""
    document.getElementById("5h3a").innerHTML = ""
    document.getElementById("5h3b").innerHTML = ""
    document.getElementById("6h3a").innerHTML = ""
    document.getElementById("6h3b").innerHTML = ""
    document.getElementById("7h3a").innerHTML = ""
    document.getElementById("7h3b").innerHTML = ""
    document.getElementById("8h3a").innerHTML = ""
    document.getElementById("8h3b").innerHTML = ""
    document.getElementById("9h3a").innerHTML = ""
    document.getElementById("9h3b").innerHTML = ""
    document.getElementById("10h3a").innerHTML = ""
    document.getElementById("10h3b").innerHTML = ""
    let right = 0;
    let numQue = 10;

    if (document.getElementById("1b").checked == true) {
        right += 1;
        document.getElementById("1h3a").innerHTML = "správně"
    } else {
        document.getElementById("1h3b").innerHTML = "špatně"
    }
    if (document.getElementById("2a").checked == true) {
        right += 1;
        document.getElementById("2h3a").innerHTML = "správně"
    } else {
        document.getElementById("2h3b").innerHTML = "špatně"
    }
    if (document.getElementById("3c").checked == true) {
        right += 1;
        document.getElementById("3h3a").innerHTML = "správně"
    } else {
        document.getElementById("3h3b").innerHTML = "špatně"
    }
    if (document.getElementById("4a").checked == true) {
        right += 1;
        document.getElementById("4h3a").innerHTML = "správně"
    } else {
        document.getElementById("4h3b").innerHTML = "špatně"
    }
    if (document.getElementById("5c").checked == true) {
        right += 1;
        document.getElementById("5h3a").innerHTML = "správně"
    } else {
        document.getElementById("5h3b").innerHTML = "špatně"
    }
    if (document.getElementById("6b").checked == true) {
        right += 1;
        document.getElementById("6h3a").innerHTML = "správně"
    } else {
        document.getElementById("6h3b").innerHTML = "špatně"
    }
    if (document.getElementById("7a").checked == true) {
        right += 1;
        document.getElementById("7h3a").innerHTML = "správně"
    } else {
        document.getElementById("7h3b").innerHTML = "špatně"
    }
    if (document.getElementById("8b").checked == true) {
        right += 1;
        document.getElementById("8h3a").innerHTML = "správně"
    } else {
        document.getElementById("8h3b").innerHTML = "špatně"
    }
    if (document.getElementById("9b").checked == true) {
        right += 1;
        document.getElementById("9h3a").innerHTML = "správně"
    } else {
        document.getElementById("9h3b").innerHTML = "špatně"
    }
    if (document.getElementById("10a").checked == true) {
        right += 1;
        document.getElementById("10h3a").innerHTML = "správně"
    } else {
        document.getElementById("10h3b").innerHTML = "špatně"
    }

    console.log(`you answered right to ${right}/${numQue} questions, with a score of ${right / numQue * 100}%`)
    document.getElementById("res").innerHTML = (`Odpověděl/a jsi správně na ${right} z ${numQue} otázek, tvé skóre je ${right / numQue * 100}%`)
}