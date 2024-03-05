function ukol1() {
    let mesic = parseInt(document.getElementById("ukol1").value)
    document.getElementById("1h1").innerHTML = (" ");
    switch (mesic) {
        case 1:
            document.getElementById("1h1").innerHTML = ("leden");
            break;
        case 2:
            document.getElementById("1h1").innerHTML = ("únor");
            break;
        case 3:
            document.getElementById("1h1").innerHTML = ("březen");
            break;
        case 4:
            document.getElementById("1h1").innerHTML = ("duben");
            break;
        case 5:
            document.getElementById("1h1").innerHTML = ("květen");
            break;
        case 6:
            document.getElementById("1h1").innerHTML = ("červen");
            break;
        case 7:
            document.getElementById("1h1").innerHTML = ("červenec");
            break;
        case 8:
            document.getElementById("1h1").innerHTML = ("srpen");
            break;
        case 9:
            document.getElementById("1h1").innerHTML = ("září");
            break;
        case 10:
            document.getElementById("1h1").innerHTML = ("říjen");
            break;
        case 11:
            document.getElementById("1h1").innerHTML = ("listopad");
            break;
        case 12:
            document.getElementById("1h1").innerHTML = ("prosinec");
            break;
        default:
            document.getElementById("1h1").innerHTML = ("x");
            break;

    }
}

function ukol2() {
    let i = 1;
    while (i <= 10) {
        document.getElementById("2h1").innerHTML += (i * 2 + " ");
        i++;
    }
}

function ukol3() {
    let heslo = "kokos"
    let input
    do {
        input = window.prompt("nesprávné heslo");
    } while (input !== heslo)
    alert("přihlášen")
}

function ukol4() {
    let den = parseInt(document.getElementById("ukol4").value)
    switch (den) {
        case 1:
            document.getElementById("4h1").innerHTML = ("pondělí");
            break;
        case 2:
            document.getElementById("4h1").innerHTML = ("úterý");
            break;
        case 3:
            document.getElementById("4h1").innerHTML = ("středa");
            break;
        case 4:
            document.getElementById("4h1").innerHTML = ("čtvrtek");
            break;
        case 5:
            document.getElementById("4h1").innerHTML = ("pátek");
            break;
        case 6:
            document.getElementById("4h1").innerHTML = ("sobota");
            break;
        case 7:
            document.getElementById("4h1").innerHTML = ("neděle");
            break;
        default:
            document.getElementById("4h1").innerHTML = ("chyba");
            break;
    }
}

function ukol5() {
    document.getElementById("5h1").innerHTML = " ";
    let ne = 0;
    let nen = 1;
    let i = 0;
    while (i < 10) {
        let n = ne + nen;
        ne = nen;
        nen = n;
        i++
    }

    document.getElementById("5h1").innerHTML = ne;
    console.log(ne)
}

function ukol6() {
    document.getElementById("6h1").innerHTML = " ";
    let idk = 0;
    let plus = 0;
    do {
        plus = Number(window.prompt("číslo"))
        idk += plus
    } while (plus != 0)

    document.getElementById("6h1").innerHTML = idk;
}