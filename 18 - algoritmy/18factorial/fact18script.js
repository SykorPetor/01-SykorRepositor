function factorial() {
    let number = document.getElementById("number").value;
    number = Number(number);
    let x = number;

    for(let i = 1; i < x; i++) {
        number = number * i;
    }

    document.getElementById("result").innerHTML = number;

}