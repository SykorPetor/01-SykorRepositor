function prevod() {
    let moni = Number(document.getElementById("input").value)
    let eur = 25.45;
    let usd = 23.61;

    if (document.getElementById("CZKi").checked) {
        if (document.getElementById("EURo").checked) {
            document.getElementById("output").innerHTML = moni / eur
        } else if (document.getElementById("USDo").checked) {
            document.getElementById("output").innerHTML = moni / usd
        } else {
            document.getElementById("output").innerHTML = moni
        }
    } else if (document.getElementById("EURi").checked) {
        if (document.getElementById("CZKo").checked) {
            document.getElementById("output").innerHTML = moni * eur
        } else if (document.getElementById("USDo").checked) {
            document.getElementById("output").innerHTML = moni * eur / usd
        } else {
            document.getElementById("output").innerHTML = moni
        }
    } else {
        if (document.getElementById("CZKo").checked) {
            document.getElementById("output").innerHTML = moni * usd
        } else if (document.getElementById("EURo").checked) {
            document.getElementById("output").innerHTML = moni / eur * usd
        } else {
            document.getElementById("output").innerHTML = moni
        }
    }
}

function invest() {

    let investiceIn = Number(document.getElementById("invStart").value)
    let yearPer = Number(document.getElementById("invPercent").value)
    let monthIn = Number(document.getElementById("invMonth").value)
    let yearFor = Number(document.getElementById("invTime").value)

    /*
    investiceIn = 10
    yearPer = 100 + 10
    monthIn = 2
    yearFor = 1
    */

    for (let i = 0; i < yearFor; i++) {
        for (let j = 0; j < 12; j++) {
            investiceIn += monthIn;
        }
        investiceIn *= ((yearPer + 100) / 100)
    }
    console.log(investiceIn)
    document.getElementById("invOutput").innerHTML = Math.floor(investiceIn) + "Kč"
}


// invest()


function dph() {
    let mony = Number(document.getElementById("inputDPH").value)
    let dph = Number(document.getElementById("dphInput").value)

    if (document.getElementById("woDPH").checked) {
        document.getElementById("dphOut").innerHTML = Math.floor(((mony) * ((dph / 100) + 1))) + "Kč"
    } else {
        document.getElementById("dphOut").innerHTML = Math.floor(((mony) / ((dph / 100) + 1))) + "Kč"
    }
}